import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";

test("Accordion component'ı düzgün çalışır", () => {
  // 1) test edilcek component'ı renderla
  render(<Accordion />);

  // 2) gerekli elementleri çağır
  const button = screen.getByRole("button");
  const p = screen.getByRole("p");

  // 3) butonun içerisinde "Göster" yazıyor mu?
  expect(button).toHaveTextContent("Göster");

  // 4) paragraf elementinin class'ı "hide" mı?
  expect(p).toHaveClass("hide");

  // 5) butona tıkla
  fireEvent.click(button);

  // 6) butonun içerisinde "Gizle" yazıyor mu?
  expect(button).toHaveTextContent("Gizle");

  // 7) paragraf elementinin class'ı "show" mu?
  expect(p).toHaveClass("show");

  // 8) butona tıkla
  fireEvent.click(button);

  // 9) butonun içerisinde "Göster" yazıyor mu?
  expect(button).toHaveTextContent("Göster");

  // 10) paragraf elementinin class'ı "hide" mı?
  expect(p).toHaveClass("hide");
});
