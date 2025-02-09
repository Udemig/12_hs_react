// Button component'ı görevini düzgün şekilde yerine getiriyor mu diye testini yazıcaz
// Unit testi kodun algoritmik olarak doğru çalışıp çalışmadığını kontrol etmek için yazarız

import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

test("Butona tıklanma olayında renk ve yazı değişir", () => {
  // 1) test edilecek bileşen render edilir
  render(<Button />);

  // 2) button elementini çağır
  const button = screen.getByRole("button");

  // 3) renk crimson mı
  expect(button).toHaveStyle({ background: "crimson" });

  // 4) yazı "Maviye Çevir" mi
  expect(button).toHaveTextContent("Maviye Çevir");

  // 5) butona tıklanır
  fireEvent.click(button);

  // 6) renk aqua oldu mu
  expect(button).toHaveStyle({ background: "aqua" });

  // 7) yazı "Kırmızıya Çevir" oldu mu
  expect(button).toHaveTextContent("Kırmızıya Çevir");

  // 8) butona tıklanır
  fireEvent.click(button);

  // 9) renk crimson oldu mu
  expect(button).toHaveStyle({ background: "crimson" });

  // 10) yazı "Maviye Çevir" oldu mu
  expect(button).toHaveTextContent("Maviye Çevir");
});
