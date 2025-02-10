import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

// Normal şartlarda bir bileşeni kullanırken prop gönderiyorsak, test ortamanında da normalde gönderdiğimiz değerlere benzer proplar göndermeliyiz
test("Gönderilen proplar doğru şekilde kullanılır", () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-blue-500" text="Toplam Test" value="399M" />);

  // icon elementini al
  const icon = screen.getByTestId("icon");

  // color prop'u ile gelen değer icon'un className'inde var mı
  expect(icon).toHaveClass("text-blue-500");

  //? text içeriklerini kontrol ederken iki ihtimal var

  //1) önce elementi çağır sonra textine bak
  const h2 = screen.getByRole("heading");
  expect(h2).toHaveTextContent("399M");

  //2) elementi textine göre çağur
  screen.getByText("Toplam Test");
});
