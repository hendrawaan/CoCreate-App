import { createSlice } from "@reduxjs/toolkit";
import { addFeedCategory, changeUserVerification, getUserList, updateFeedCategory } from "../api/";
import { getFeedsCetegory } from "./feed";

// Slice
const adminSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    onProcess: (state) => {
      state.loading = true;
    },
    getUserListSuccess: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.userList = payload;
    },
    addCategorySuccess: (state) => {
      state.error = null;
      state.loading = false;
    },
    updateCategorySuccess: (state) => {
      state.error = null;
      state.loading = false;
    },
    setUserVerifiedSucces: (state) => {
      state.error = null;
      state.loading = false;
    },
    onFailed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default adminSlice.reducer;

const {
  getUserListSuccess,
  setUserVerifiedSucces,
  onFailed,
  onProcess,
  updateCategorySuccess,
  addCategorySuccess
} = adminSlice.actions;

/**
 * Action untuk mengambil daftar user
 * @param {string} options All = semua user | True = user yang telah diverifikasi
 * | False = user yang belum diverfikasi
 * @param {string} token Data token yang akan digunakan untuk Authorization. 
 */
export const getUsersList = (options, token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const userListResponse = await getUserList(options, token);
    switch (userListResponse.code) {
      case 200:
        dispatch(getUserListSuccess(userListResponse.data.users));
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Action untuk memverfikasi / mereject user
 * @param {boolean} options True = Verfikasi user | False = Reject user
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const setUsersVerification = (options, token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const response = await changeUserVerification(options, token);
    switch (response.code) {
      case 200:
        dispatch(setUserVerifiedSucces());
        dispatch(getUsersList("all", token));
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Action untuk mebambahkan kategori feed yang baru.
 * @param {object} category Data kategori yang akan ditambahkan
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const addFeedCategoryAction = (category, token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const response = await addFeedCategory(category, token);
    switch (response.code) {
      case 200:
        dispatch(addCategorySuccess());
        dispatch(getFeedsCetegory());
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Action untuk mengubah suatu kategori feed.
 * @param {object} category Data kategori yang ingin diubah.
 * @param {string} token Data token yang akan digunakan untuk Authorization.
 */
export const updateFeedCategoryAction = (category, token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const response = await updateFeedCategory(category, token);
    switch (response.code) {
      case 200:
        dispatch(updateCategorySuccess());
        dispatch(getFeedsCetegory());
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
