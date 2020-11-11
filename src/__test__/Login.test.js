import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { create } from "react-test-renderer";
import { Login } from "../pages";

describe("Test halaman login", () => {
  test("Harus sesuai dengan snapshot komponen heading", () => {
    const heading = create(<Login />);
    expect(heading.toJSON()).toMatchSnapshot();
  });
});
