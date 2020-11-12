import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { create } from "react-test-renderer";
import { Login } from "../pages";

/**
 * Test untuk halaman login.
 */
describe("Test Halaman Login", () => {
  /**
   * Memastikan halaman login memiliki kecocokan dengan snapshoot
   * Login.test.js.snap.
   */
  test("Halaman Login Harus sesuai dengan snapshot komponen login", () => {
    const login = create(<Login />);
    expect(login.toJSON()).toMatchSnapshot();
  });
});
