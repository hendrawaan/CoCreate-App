import { createSlice } from "@reduxjs/toolkit";
import { loginToApi } from "../api/";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginProcess: (state, { payload }) => {
      state.error = null;
      state.loading = true;
    },
    loginSucces: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
      state.loading = false;
    },
    loginFailed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    logOutSucces: (state, action) => {
      state.user = null;
    },
  },
});

export default slice.reducer;

const { loginProcess, loginSucces, logOutSucces, loginFailed } = slice.actions;

/**
 * Digunakan untuk login.
 * Ketika login berhasil data dari endpoint akan disimpan ke dalam local
 * storage.
 * @param {object} param Nama dan password
 */
export const login = ({ name, password }) => async (dispatch) => {
  try {
    dispatch(loginProcess());
    const loginResponse = await loginToApi({ name, password });

    switch (loginResponse.code) {
      case 200:
        dispatch(loginSucces(loginResponse.data));
        window.location = "/";
        break;
      case 400:
        throw new Error("Usernama atau password salah.");
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(loginFailed(e.message));
  }
};

/**
 * Digunakan untuk melakukan logout.
 * Data user akan dihapus dari localstorage.
 */
export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    return dispatch(logOutSucces());
  } catch (e) {
    return console.error(e.message);
  }
};
