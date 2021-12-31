import { render, screen } from "@testing-library/react";
import "intersection-observer";
import "@testing-library/jest-dom/extend-expect";
import { PagListItemLoading } from "./ListItemLoading";

describe("Testing ListItemLoading component", () => {
  it("check rendering itemLoading", () => {
    render(<PagListItemLoading />);
    const itemLoading = screen.getByTestId("loading-list-item");

    expect(itemLoading).toBeInTheDocument();
  });
});
