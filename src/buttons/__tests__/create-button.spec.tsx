import React from "react";
import { createButton } from "../create-button";
import { render, screen } from "@testing-library/react";

describe("createButton", () => {
  it("should return a function", () => {
    expect(typeof createButton({})).toBe("function");
  });

  it("should render react element", () => {
    const Button = createButton({});
    render(<Button />);
  });

  it("should pass text down", () => {
    const Button = createButton({
      text: "Hello",
    });
    render(<Button />);

    expect(screen.getByText("Hello")).toBeDefined();
  });
});
