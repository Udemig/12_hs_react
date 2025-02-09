import { fireEvent, render, screen } from "@testing-library/react";
import Counter from ".";

test("sayaç doğru şekilde çalışır", () => {
  // 1) test edilecek bileşen render edilir
  render(<Counter />);

  // 2) gerekli elementleri çağır
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const count = screen.getByRole("p");

  // 3) azalt butonu disabled mı
  expect(decBtn).toBeDisabled();

  // 4) sayacın değeri 0 mı
  expect(count).toHaveTextContent("0");

  // 5) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 6) sayacın değeri 1 mi
  expect(count).toHaveTextContent("1");

  // 7) azalt butonnu aktif mi
  expect(decBtn).toBeEnabled();

  // 8) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 9) sayacın değeri 2 mi
  expect(count).toHaveTextContent("2");

  // 10) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 11) sayacın değeri 1 mi
  expect(count).toHaveTextContent("1");

  // 12) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 13) sayacın değeri 0 mi
  expect(count).toHaveTextContent("0");

  // 14) azalt butonu disabled mı
  expect(decBtn).toBeDisabled();
});
