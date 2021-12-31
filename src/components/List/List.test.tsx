import { render, screen } from "@testing-library/react";
import { PagList } from ".";
import "intersection-observer";
import "@testing-library/jest-dom/extend-expect";

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
});
