import { fireEvent, render, screen } from "@testing-library/react";
import { PagAppBar } from ".";
import "intersection-observer";
import "@testing-library/jest-dom/extend-expect";

describe("Testing AppBar component", () => {
  it("check rendering AppBar", () => {
    render(<PagAppBar />);
    const AppBar = screen.getByTestId("component-app-bar");

    expect(AppBar).toBeInTheDocument();
  });
  it("check rendering ThemeButton", () => {
    render(<PagAppBar />);
    const themeButton = screen.getByTestId("button-theme-switch");

    expect(themeButton).toBeInTheDocument();
  });
  it("check function in ThemeButton", () => {
    render(<PagAppBar />);
    const themeButtonLight = screen.getByTestId("button-theme-light");
    const themeButtonDark = screen.queryByTestId("button-theme-dark");
    fireEvent(
      screen.getByTestId("button-theme-switch"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    console.log({ affter: themeButtonDark });

    expect(themeButtonLight).toBeInTheDocument();
  });
});
