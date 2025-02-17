// AmountPicker.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import AmountPicker from "../components/modal/amount-picker";
import { addToCart, deleteFromCart } from "../redux/cartSlice";

// react-redux hook'unu doğrudan mock'luyoruz
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

// Redux aksiyon oluşturucularını mock'lıyoruz
jest.mock("../redux/cartSlice", () => ({
  addToCart: jest.fn(),
  deleteFromCart: jest.fn(),
}));

describe("AmountPicker", () => {
  let mockDispatch;

  // Testlerde kullanılacak örnek item nesnesi
  const item = { id: 1, amount: 3, type: "regular" };

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen item.amount değerini doğru şekilde render ediyor", () => {
    render(<AmountPicker item={item} />);
    // item.amount sayısının string halinin render edildiğini kontrol ediyoruz
    expect(screen.getByText(item.amount.toString())).toBeInTheDocument();
  });

  test("sol butona tıklanınca deleteFromCart aksiyonu dispatch ediliyor", () => {
    // deleteFromCart aksiyon oluşturucusuna mock dönüş değeri atıyoruz
    const mockDeleteAction = { type: "cart/delete", payload: item };
    deleteFromCart.mockReturnValue(mockDeleteAction);

    render(<AmountPicker item={item} />);
    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    // dispatch'in doğru aksiyonu aldığı kontrol ediliyor
    expect(deleteFromCart).toHaveBeenCalledWith(item);
    expect(mockDispatch).toHaveBeenCalledWith(mockDeleteAction);
  });

  test("sağ butona tıklanınca addToCart aksiyonu dispatch ediliyor", () => {
    // addToCart aksiyon oluşturucusuna mock dönüş değeri atıyoruz
    const expectedPayload = { item, selectedType: item.type };
    const mockAddAction = { type: "cart/add", payload: expectedPayload };
    addToCart.mockReturnValue(mockAddAction);

    render(<AmountPicker item={item} />);
    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);

    // dispatch'in doğru aksiyonu aldığı kontrol ediliyor
    expect(addToCart).toHaveBeenCalledWith(expectedPayload);
    expect(mockDispatch).toHaveBeenCalledWith(mockAddAction);
  });
});
