import React from "react";
import { render } from "@testing-library/react";
import { withStoreProvider } from "lib/utils/tests";
import BarChart from "..";

const data = [{ x: ["Q1"], y: [100], name: "Sales Target" }];

describe("<BarChart />", () => {
  let component;

  const WithProvider = withStoreProvider(() => <BarChart />, {
    data: { bar: data },
  });

  beforeEach(() => {
    component = render(<WithProvider />);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
  });
});
