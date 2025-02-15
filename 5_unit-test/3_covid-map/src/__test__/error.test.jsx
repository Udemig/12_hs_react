import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

it("prop olarak alınan hata mesajı ekrana basılır", () => {
  render(<Error info="İnternetiniz çok yavaş" refetch={() => {}} />);

  screen.getByText(/yavaş/i);
});

it("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  // jest ile sahte bir fonksiyon oluştur
  const mockFn = jest.fn();

  // bileşeni renderla
  render(<Error info="İnternetiniz çok yavaş" refetch={mockFn} />);

  // butonu al
  const button = screen.getByRole("button");

  // tekrar dene butonuna tıkla
  fireEvent.click(button);

  // refetch fonksiyonu çağrıldı mı
  expect(mockFn).toHaveBeenCalled();
});
