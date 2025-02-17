import { render, screen } from "@testing-library/react";
import Modal from "../components/modal";
import { useSelector } from "react-redux";
import CartItem from "../components/modal/cart-item";
import CartInfo from "../components/modal/cart-info";
import userEvent from "@testing-library/user-event";

// useSelector mock
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

// cartInfo ve cartItem component'ları modal içerisinde kullandığı için ve useDispatch/useNavigate içerebilcekleri için test hata verebilir. bunun önüne geçmek için bu componentları mock
jest.mock("../components/modal/cart-item", () => () => <h1>Cart Item</h1>);
jest.mock("../components/modal/cart-info", () => () => <h1>Cart Info</h1>);

describe("Modal Component", () => {
  const closeMock = jest.fn();

  it("isOpen propuna göre modal ekrana basılır", () => {
    // useSelector çağrılınca bunu return etsin
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla (isopen:false)
    const { rerender } = render(<Modal isOpen={false} close={closeMock} />);

    // modal ekranda yoktur
    expect(screen.queryByTestId("modal")).toBeNull();

    // bileşeni tekrar renderla (isopen:true)
    rerender(<Modal isOpen={true} close={closeMock} />);

    // modal ekranda vardır
    screen.getByTestId("modal");
  });

  it("X butonuna tıklanınca close fonksiyonu çalışır", async () => {
    // useSelector çağrılınca bunu return etsin
    useSelector.mockReturnValue({ cart: [] });

    // userEvent kurulum
    const user = userEvent.setup();

    // bileşeni renderla (isopen:true)
    render(<Modal isOpen={true} close={closeMock} />);

    // x butonunu al
    const closeBtn = screen.getByTestId("close");

    // butona tıkla
    await user.click(closeBtn);

    // closeMock fonksiyonu çalışmıştır
    expect(closeMock).toHaveBeenCalled();
  });

  it("Sepetin doluluk durumuna göre ekrana uyarı basılır", () => {
    // useSelector çağrılınca boş return etsin
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla (isopen:false)
    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);

    // ekranda uyarı mesajı vardır
    screen.getByText(/henüz/i);

    // useSelector çağrılınca dolu return etsin
    useSelector.mockReturnValue({ cart: [1, 2, 3, 4] });

    // bileşeni tekrar renderla
    rerender(<Modal isOpen={true} close={closeMock} />);

    // ekranda uyarı mesajı yoktur
    expect(screen.queryByText(/henüz/i)).toBeNull();
  });

  it("Sepet dolu ise her bir eleman için ekrana kart basılır", () => {
    // useSelector çağrılınca dolur return etsin
    useSelector.mockReturnValue({ cart: [1, 2, 3, 4] });

    // bileşeni renderla
    render(<Modal isOpen={true} close={closeMock} />);

    // ekrandaki bütün item componentlarını al
    const items = screen.getAllByRole("heading", { name: "Cart Item" });

    // items dizisinin uzunluğu 4'tür
    expect(items.length).toBe(4);
  });
});
