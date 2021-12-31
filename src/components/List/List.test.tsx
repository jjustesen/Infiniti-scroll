import { fireEvent, render, screen } from "@testing-library/react";
import { PagList } from ".";
import "intersection-observer";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Testing List component", () => {
  it("check rendering input search", () => {
    render(<PagList />);
    const inputSearch = screen.getByTestId("input-search");

    expect(inputSearch).toBeInTheDocument();
  });
  it("check rendering button Search", () => {
    render(<PagList />);
    const buttonSearch = screen.getByTestId("button-search");

    expect(buttonSearch).toBeInTheDocument();
  });
  it("check function of input Search", () => {
    render(<PagList />);
    const inputSearch = screen.getByDisplayValue("");
    const buttonSearch = screen.getByTestId("button-search");

    fireEvent.change(inputSearch, { target: { value: "pikachu" } });

    userEvent.click(buttonSearch);

    setTimeout(() => {
      const item = screen.getByText("pokeapi.co/api/v2/pokemon/1/");
      expect(item).toBeInTheDocument();
    }, 2000);
  });
  it("check function of input Search if theres no result", () => {
    render(<PagList />);
    const inputSearch = screen.getByDisplayValue("");
    const buttonSearch = screen.getByTestId("button-search");

    fireEvent.change(inputSearch, { target: { value: "asd" } });

    userEvent.click(buttonSearch);

    setTimeout(() => {
      const item = screen.getByText("No items to show!");
      expect(item).toBeInTheDocument();
    }, 2000);
  });
});
