import { render, screen } from "@testing-library/react";
import App from "./App";

test("Ekranda selamlar yazar", () => {
  render(<App />);

  screen.getByRole("heading", { name: /selamlar/i });
});
