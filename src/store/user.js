import { createSlice } from "@reduxjs/toolkit";
import { loginToApi, registeringUser } from "../api/";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
  },
  reducers: {
    onProcess: (state) => {
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
    logOutSucces: (state) => {
      state.user = null;
    },
    registSuccess: (state) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;

const {
  onProcess,
  loginSucces,
  logOutSucces,
  onFailed,
  registSuccess,
} = userSlice.actions;

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
    dispatch(logOutSucces());
  } catch (e) {
    console.error(e.message);
  }
};

/**
 * Digunakan untuk registrasi.
 * Ketika registrasi berhasil maka akan dilanjutkan dengan login otomatis.
 * @param {object} param name, username, email, password
 */
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
        dispatch(login({ email, password }));
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
