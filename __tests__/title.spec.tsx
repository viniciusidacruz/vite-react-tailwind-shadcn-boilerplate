import React from "react";
import { expect, test, describe } from "vitest";
import { render } from "@testing-library/react";

describe("Title", () => {
  test("renders title", () => {
    const { getByRole } = render(
      <h1 className="text-2xl font-bold">Hello World</h1>
    );
    expect(getByRole("heading", { level: 1 })).toHaveTextContent("Hello World");
  });
});
