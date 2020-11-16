import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { Provider } from 'react-redux';
import { create } from "react-test-renderer";
import configureStore from 'redux-mock-store';
import { Login } from "../pages";


const mockStore = configureStore([]);

/**
 * Test untuk halaman login.
 */
describe("Test Halaman Login", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      user: "initialUser"
    });

    component = create(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  })
  /**
   * Memastikan halaman login memiliki kecocokan dengan snapshoot
   * Login.test.js.snap.
   */
  test("Halaman Login Harus sesuai dengan snapshot komponen login", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
