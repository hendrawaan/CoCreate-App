import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "../api/";
import { logout } from "./user";

// Slice
const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    onFailed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    getProfileSuccess: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.profile = payload;
    },
  },
});

export default profileSlice.reducer;

const { onFailed, getProfileSuccess } = profileSlice.actions;

/**
 * Mengambil profil singkat user.
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const getProfile = (token) => async (dispatch) => {
  try {
    const profileResponse = await getUserProfile(token);

    // Cek apakah ada error
    if (!profileResponse.error) {
      switch (profileResponse.code) {
        case 200:
          dispatch(getProfileSuccess(profileResponse.data));
          break;
        default:
          throw new Error("Uppss.. Terjadi kesalahan.");
      }
    } else {
      // Ini artinya token sudah tidak valid jadi user di arahkan ke halaman
      // login.
      await dispatch(logout());
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
