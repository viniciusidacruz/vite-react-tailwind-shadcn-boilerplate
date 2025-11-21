import { expect, test, describe } from "vitest";
import { render } from "@testing-library/react";

import { Title } from "@components/Title";

describe("Title", () => {
  test("renders title", () => {
    const { getByText } = render(
      <Title description="Description Test">Title Component</Title>
    );

    expect(getByText("Title Component")).toBeInTheDocument();
    expect(getByText("Description Test")).toBeInTheDocument();
  });

  test("renders title with default description", () => {
    const { getByText } = render(<Title>Title Component</Title>);

    expect(getByText("Title Component")).toBeInTheDocument();
    expect(
      getByText("Não esqucem de dar uma estrela no projeto!")
    ).toBeInTheDocument();
  });
});
