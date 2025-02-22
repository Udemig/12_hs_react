import { render, screen } from "@testing-library/react";
import CartInfo from "../components/modal/cart-info";
import { useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";

// useDispatch mockla
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Cartinfo Component", () => {
  // dispatch'i mockla
  const dispatchMock = jest.fn();

  // useDispatch çağrıldığında sahte disatch'i return etmeli
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  // her test sonrasında mock'ları sıfırla
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("araToplam,kargo,toplam değerli doğru şekilde renderlanır", () => {
    const cart = [
      { id: 1, name: "Vanilya", price: 25, amount: 2 },
      { id: 2, name: "Çikolata", price: 30, amount: 1 },
    ];

    const close = jest.fn();

    render(<CartInfo cart={cart} close={close} />);

    expect(screen.getByTestId("subtotal")).toHaveTextContent("80₺");

    expect(screen.getByTestId("shipping")).toHaveTextContent("20₺");

    expect(screen.getByTestId("total")).toHaveTextContent("100₺");
  });

  test("sipariş ver butonu ve doğru çalışır", async () => {
    const user = userEvent.setup();

    const cart = [
      { id: 1, name: "Vanilya", price: 25, amount: 2 },
      { id: 2, name: "Çikolata", price: 30, amount: 1 },
    ];

    const close = jest.fn();

    render(<CartInfo cart={cart} close={close} />);

    // sipariş ver butonunu bul ve tıkla
    const button = screen.getByRole("button");
    await user.click(button);

    // aksiyon dispatch edildi mi
    expect(dispatchMock).toHaveBeenCalled();

    // close fonksiyonu çağrıldı mı
    expect(close).toHaveBeenCalled();
  });

  test("hiç ürün yoksa sipariş butonu inaktiftir", () => {
    const cart = [];

    const close = jest.fn();

    render(<CartInfo cart={cart} close={close} />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("toplam 100₺ üzerinde kargo ücretsiz olur", () => {
    const cart = [
      { id: 1, name: "Vanilya", price: 25, amount: 4 },
      { id: 2, name: "Çikolata", price: 30, amount: 1 },
    ];

    const close = jest.fn();

    render(<CartInfo cart={cart} close={close} />);

    // kargo ücretsiz mi kontrol et
    expect(screen.getByTestId("shipping")).toHaveTextContent("Ücretsiz");
  });
});
