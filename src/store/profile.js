import { createSlice } from "@reduxjs/toolkit";
import {
  getAnotherUserProfile,
  getUserProfile,
  updateUserPassword,
  updateUserProfile
} from "../api/";

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
    updateProfileSuccess: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.profile = payload;
    },
    updatePasswordSuccess: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
  },
});

export default profileSlice.reducer;

const {
  onFailed,
  getProfileSuccess,
  updateProfileSuccess,
  updatePasswordSuccess,
} = profileSlice.actions;

/**
 * Mengambil profil singkat user.
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const getProfile = (token) => async (dispatch) => {
  try {
    const profileResponse = await getUserProfile(token);
    switch (profileResponse.code) {
      case 200:
        dispatch(getProfileSuccess(profileResponse.data));
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Mengambil profil singkat user lain.
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const getUserProfileID = (token, id) => async (dispatch) => {
  try {
    const profileResponse = await getAnotherUserProfile(token, id);

    switch (profileResponse.code) {
      case 200:
        dispatch(getProfileSuccess(profileResponse.data));
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Mengupdate Profile.
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @param {object} data profile yang dikirimkan
 */
export const updateProfile = ({ name, birth, gender, address, phone, postcode,
  short_bio }, token) => async (dispatch) => {
    try {
      const response = await updateUserProfile(
        { name, birth, gender, address, phone, postcode, short_bio },
        token
      );

      switch (response.code) {
        case 200:
          dispatch(updateProfileSuccess(response.data));
          break;
        case 400:
          throw new Error("Password tidak sesuai.");
        default:
          throw new Error("Uppss.. Terjadi kesalahan.");
      }
    } catch (e) {
      dispatch(onFailed(e.message));
    }
};

/**
 * Mengupdate Profile.
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @param {object} data password yang dikirimkan
 */
export const updatePassword = ({ password_lama, password_baru },
  token) => async (dispatch) => {
    try {
      const response = await updateUserPassword(
        { password_lama, password_baru },
        token
      );

      switch (response.code) {
        case 200:
          dispatch(updatePasswordSuccess(response.data));
          break;
        case 400:
          throw new Error("Password tidak sesuai.");
        default:
          throw new Error("Uppss.. Terjadi kesalahan.");
      }
    } catch (e) {
      dispatch(onFailed(e.message));
    }
};
