import React from "react";
import { render } from "@testing-library/react";
import { withProvider } from "lib/utils/tests";
import Kpis from "..";

describe("<Kpis />", () => {
  let component;

  beforeEach(() => {
    const WithProvider = withProvider(Kpis);
    component = render(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });

  it("renders the component", () => {
    expect(component.baseElement).toMatchSnapshot();
  });
});