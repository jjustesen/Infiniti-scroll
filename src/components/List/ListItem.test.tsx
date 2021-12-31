import { render, screen } from "@testing-library/react";
import { PagListItem } from ".";
import "intersection-observer";
import "@testing-library/jest-dom/extend-expect";

describe("Testing ListItem component", () => {
  it("check rendering title", () => {
    render(<PagListItem title="teste title" subtitle="teste subtitle" />);
    const labelTitle = screen.getByTestId("label-title");

    expect(labelTitle).toHaveTextContent("teste title");
  });
  it("check rendering subtitle", () => {
    render(<PagListItem title="teste title" subtitle="teste subtitle" />);
    const labelSubtitle = screen.getByTestId("label-subtitle");

    expect(labelSubtitle).toHaveTextContent("teste subtitle");
  });
});
