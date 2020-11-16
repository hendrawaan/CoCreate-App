import { createSlice } from "@reduxjs/toolkit";
import { loginToApi, registeringUser } from "../api/";

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
    onProcess: (state, { payload }) => {
      state.error = null;
      state.loading = true;
    },
    onFailed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    loginSucces: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
      state.loading = false;
    },
    logOutSucces: (state, action) => {
      state.user = null;
    },
    registSuccess: (state, action) => {
      state.loading = false;
      console.log(action.payload)
    },
  },
});

export default slice.reducer;

const {
  onProcess,
  loginSucces,
  logOutSucces,
  onFailed,
  registSuccess,
} = slice.actions;

/**
 * Digunakan untuk login.
 * Ketika login berhasil data dari endpoint akan disimpan ke dalam local
 * storage.
 * @param {object} param Nama dan password
 */
export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const loginResponse = await loginToApi({ email, password });

    switch (loginResponse.code) {
      case 200:
        dispatch(loginSucces(loginResponse.data));
        window.location = "/";
        break;
      case 400:
        throw new Error("Username atau password salah.");
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
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

export const addUser = ({ name, username, email, password }) => async (
  dispatch
) => {
  try {
    dispatch(onProcess());
    const registResponse = await registeringUser({
      name,
      username,
      email,
      password,
    });

    switch (registResponse.code) {
      case 200:
        dispatch(registSuccess());
        dispatch(login({email, password }))
        break;
      case 400:
        throw new Error("Tampaknya akun sudah ada");
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
