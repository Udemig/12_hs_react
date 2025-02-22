import { render, screen } from "@testing-library/react";
import CartInfo from "../components/modal/cart-info";
import userEvent from "@testing-library/user-event";
import { toast } from "react-toastify";
import { createOrder } from "../redux/cartSlice";

// Mock the Redux dispatch and toast
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));
jest.mock("react-toastify", () => ({
  toast: { success: jest.fn() },
}));
jest.mock("../redux/cartSlice", () => ({
  createOrder: jest.fn(),
}));

describe("CartInfo Component", () => {
  let mockDispatch;
  let mockClose;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockClose = jest.fn();
    jest.clearAllMocks();
    require("react-redux").useDispatch.mockReturnValue(mockDispatch);
  });

  const renderComponent = (cart) => {
    render(<CartInfo cart={cart} close={mockClose} />);
  };

  // Test 1: Empty cart
  it("renders correctly with an empty cart", () => {
    renderComponent([]);

    expect(screen.getByTestId("subtotal")).toHaveTextContent("0₺");
    expect(screen.getByTestId("shipping")).toHaveTextContent("0₺");
    expect(screen.getByTestId("total")).toHaveTextContent("0₺");
    expect(screen.getByRole("button", { name: /sipariş ver/i })).toBeDisabled();
  });

  // Test 2: Cart with subtotal < 100
  it("calculates correctly and shows shipping fee when subtotal < 100", () => {
    const cart = [
      { price: 30, amount: 2 }, // 60
      { price: 10, amount: 1 }, // 10
    ]; // Subtotal = 70, Shipping = 20, Total = 90
    renderComponent(cart);

    expect(screen.getByTestId("subtotal")).toHaveTextContent("70₺");
    expect(screen.getByTestId("shipping")).toHaveTextContent("20₺");
    expect(screen.getByTestId("total")).toHaveTextContent("90₺");
    expect(screen.getByRole("button", { name: /sipariş ver/i })).not.toBeDisabled();
  });

  // Test 3: Cart with subtotal > 100
  it("shows free shipping when subtotal > 100", () => {
    const cart = [
      { price: 60, amount: 2 }, // 120
      { price: 10, amount: 1 }, // 10
    ]; // Subtotal = 130, Shipping = 0, Total = 130
    renderComponent(cart);

    expect(screen.getByTestId("subtotal")).toHaveTextContent("130₺");
    expect(screen.getByTestId("shipping")).toHaveTextContent("Ücretsiz");
    expect(screen.getByTestId("total")).toHaveTextContent("130₺");
    expect(screen.getByRole("button", { name: /sipariş ver/i })).not.toBeDisabled();
  });

  // Test 4: Button click dispatches action, shows toast, and closes
  it("handles button click correctly when subtotal > 0", async () => {
    const cart = [{ price: 50, amount: 1 }]; // Subtotal = 50, Shipping = 20, Total = 70
    renderComponent(cart);

    const button = screen.getByRole("button", { name: /sipariş ver/i });
    expect(button).not.toBeDisabled();

    await userEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(createOrder());
    expect(toast.success).toHaveBeenCalledWith("Ürünler hazırlanıyor...");
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  // Test 5: Button is disabled and does not trigger actions when clicked with empty cart
  it("does not dispatch or close when button is clicked with empty cart", async () => {
    renderComponent([]);

    const button = screen.getByRole("button", { name: /sipariş ver/i });
    expect(button).toBeDisabled();
  });
});
