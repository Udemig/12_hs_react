import { render, screen } from "@testing-library/react";
import Card from "../components/list/card";
import { useDispatch } from "react-redux";
import { mockData } from "../utils/constants";
import userEvent from "@testing-library/user-event";

// useDispatch'i mockla
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Card testler", () => {
  // useDispatch'in döndürdüğü dispatch methodunu mockla
  const dispatchMock = jest.fn();

  // her testin öncesinde useDispatch'in sahte dispatch'i döndürüceğini söyle
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  // her testin sonrasında bütün mockları sıfırla
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("İtem propuna göre detaylar doğru şekilde ekrana basılır", () => {
    render(<Card item={mockData[0]} />);

    // yazılar ekrana basılıyor mu
    screen.getByRole("heading", { name: "Bal Badem" });
    screen.getByText("₺25 / top");

    // resim var mı? kaynağı doğru mu?
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/ice-1.png");
  });

  it("Tipin seçili olma durumuna göre buton görünürlüğü değişir", async () => {
    userEvent.setup();

    // card bileşenini renderla
    render(<Card item={mockData[0]} />);

    // sepet ekle butonunu al
    const basketBtn = screen.getByRole("button", { name: /sepete/i });

    // sepete ekle butonu görünmez
    expect(basketBtn).toHaveClass("invisible");

    // külahta butonunu al
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });

    // külahta butonuna tıkla
    await userEvent.click(cornetBtn);

    // sepete ekle butonu görünür
    expect(basketBtn).not.toHaveClass("invisible");

    // külahta butonuna tıkla
    await userEvent.click(cornetBtn);

    // sepete ekle butonu görünmez
    expect(basketBtn).toHaveClass("invisible");
  });

  it("'Sepete Ekle' butonuna tıklanınca aksiyon dispatch edilir", () => {});
});
