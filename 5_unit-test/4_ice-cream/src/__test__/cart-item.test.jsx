// CartItem.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "../components/modal/cart-item";
import AmountPicker from "../components/modal/amount-picker";

// AmountPicker bileşenini mock'lıyoruz
jest.mock("../components/modal/amount-picker", () => {
  // Dummy component: props'ları JSON formatında render ederek test edilebilir hale getiriyoruz.
  return function DummyAmountPicker(props) {
    return <div data-testid="amount-picker-mock">{JSON.stringify(props)}</div>;
  };
});

describe("CartItem", () => {
  // Farklı senaryolar için örnek item nesneleri
  const itemCup = {
    image: "https://example.com/coffee.jpg",
    name: "Coffee",
    type: "cup", // Bu durumda "Bardakta" gösterilmeli
    price: 10,
    amount: 2,
  };

  const itemCornet = {
    image: "https://example.com/tea.jpg",
    name: "Tea",
    type: "cornet", // Bu durumda "Külahta" gösterilmeli
    price: 15,
    amount: 3,
  };

  test('item.type "cup" olduğunda doğru render ediliyor', () => {
    render(<CartItem item={itemCup} />);

    // Resmin doğru src ile render edildiğini kontrol ediyoruz
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", itemCup.image);

    // Ürün adının (name) h1 etiketi içerisinde render edildiğini kontrol ediyoruz
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(itemCup.name);

    // item.type "cup" olduğundan, "Bardakta" yazısı görüntülenmeli
    expect(screen.getByText("Bardakta")).toBeInTheDocument();

    // Fiyatın (price * amount) doğru hesaplanarak render edildiğini kontrol ediyoruz
    const totalPrice = itemCup.price * itemCup.amount;
    expect(screen.getByText(`${totalPrice}₺`)).toBeInTheDocument();

    // AmountPicker bileşeninin mock versiyonunun render edildiğini ve doğru props ile çağrıldığını doğruluyoruz
    const amountPickerMock = screen.getByTestId("amount-picker-mock");
    expect(amountPickerMock).toBeInTheDocument();
    // JSON.stringify edilmiş props içinde "amount" değerinin bulunduğunu kontrol ediyoruz
    expect(amountPickerMock).toHaveTextContent(`"amount":${itemCup.amount}`);
  });

  test('item.type "cup" dışındaki ("cornet") durumda doğru render ediliyor', () => {
    render(<CartItem item={itemCornet} />);

    // Resmin doğru src ile render edildiğini kontrol ediyoruz
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", itemCornet.image);

    // Ürün adının (name) h1 etiketi içerisinde render edildiğini kontrol ediyoruz
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(itemCornet.name);

    // item.type "cup" olmadığı için "Külahta" yazısı görüntülenmeli
    expect(screen.getByText("Külahta")).toBeInTheDocument();

    // Fiyatın (price * amount) doğru hesaplanarak render edildiğini kontrol ediyoruz
    const totalPrice = itemCornet.price * itemCornet.amount;
    expect(screen.getByText(`${totalPrice}₺`)).toBeInTheDocument();

    // AmountPicker bileşeninin mock versiyonunun render edildiğini ve doğru props ile çağrıldığını doğruluyoruz
    const amountPickerMock = screen.getByTestId("amount-picker-mock");
    expect(amountPickerMock).toBeInTheDocument();
    expect(amountPickerMock).toHaveTextContent(`"amount":${itemCornet.amount}`);
  });
});
