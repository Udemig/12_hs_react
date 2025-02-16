import { render, screen } from "@testing-library/react";
import Selector from "../components/list/selector";
import userEvent from "@testing-library/user-event";

const mockFn = jest.fn();

describe("Selector bileşeni", () => {
  it("Cornet seçilince butonun arkaplanı değişir", () => {
    // bileşeni renderla
    render(<Selector selectedType="cornet" handleType={() => {}} />);

    // cornet butonunda active class'ları vardır
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });
    expect(cornetBtn).toHaveClass("bg-white text-black");

    // cup butonunda active class'ları yoktur
    const cupBtn = screen.getByRole("button", { name: /bardakta/i });
    expect(cupBtn).not.toHaveClass("bg-white text-black");
  });

  it("Cup seçilince butonun arkaplanı değişir", () => {
    // bileşeni renderla
    render(<Selector selectedType="cup" handleType={() => {}} />);

    // cornet butonunda active class'ları yoktur
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });
    expect(cornetBtn).not.toHaveClass("bg-white text-black");

    // cup butonunda active class'ları yoktur
    const cupBtn = screen.getByRole("button", { name: /bardakta/i });
    expect(cupBtn).toHaveClass("bg-white text-black");
  });

  it("Butonlara tıklanınca fonksiyon doğru parametrelere çalışır", async () => {
    // userEventi kur
    const user = userEvent.setup();

    // bileşeni renderla
    render(<Selector selectedType={null} handleType={mockFn} />);

    // butonları al
    const cupBtn = screen.getByRole("button", { name: /bardakta/i });
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });

    // bardakta butonuna tıkla
    await user.click(cupBtn);

    // fonksiyon cup parametresi ile çalıştı mı
    expect(mockFn).toHaveBeenCalledWith("cup");

    // kornet butonuna tıkla
    await user.click(cornetBtn);

    // fonksiyon cornet parametresi ile çalıştı mı
    expect(mockFn).toHaveBeenCalledWith("cornet");
  });
});
