import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { create } from "react-test-renderer";

describe("Test halaman login", () => {
  test("Harus sesuai dengan snapshot komponen heading", () => {
    const Login = create(<Login />);
    expect(Login.toJSON()).toMatchSnapshot();
  });
});
