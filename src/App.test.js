import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza el título principal", () => {
  render(<App />);
  const titleElement = screen.getByText(/Lista de Personajes/i);
  expect(titleElement).toBeInTheDocument();
});
