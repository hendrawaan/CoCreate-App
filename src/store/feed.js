import { createSlice } from "@reduxjs/toolkit";
import {
  getDetailFeed,
  getListFeedCategory,
  getListFeedTrending
} from "../api/";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    loading: true,
  },
  reducers: {
    onClear: (state) => {
      state.feed = null;
      state.feeds = null;
    },
    onProcess: (state) => {
      state.loading = true;
    },
    getFeedsSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.feeds = action.payload;
    },
    getListCategorySuccess: (state, action) => {
      state.categoryFeeds = action.payload;
      state.error = null;
      state.loading = false;
    },
    getFeedSuccess: (state, action) => {
      state.feed = action.payload;
      state.loading = false;
    },
    onFailed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default feedSlice.reducer;

const {
  onClear,
  onProcess,
  getListCategorySuccess,
  getFeedsSuccess,
  getFeedSuccess,
  onFailed,
} = feedSlice.actions;

/**
 * Action untuk mengambil daftar feeds yang trending.
 */
export const getFeedsTrendingList = () => async (dispatch) => {
  try {
    dispatch(onProcess());
    const listResponse = await getListFeedTrending();
    switch (listResponse.code) {
      case 200:
        dispatch(getFeedsSuccess(listResponse.data["feeds-trending"]));
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Action untuk mengambil kategori feeds yang tersedia
 */
export const getFeedsCetegory = () => async (dispatch) => {
  try {
    dispatch(onProcess());
    const listResponse = await getListFeedCategory();
    switch (listResponse.code) {
      case 200:
        dispatch(getListCategorySuccess(listResponse.data["kategori feed"]));
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Action untuk mengambil salah satu feed
 * @param {number} id ID feed
 */
export const getFeed = (id) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const feedResponse = await getDetailFeed(id);
    switch (feedResponse.code) {
      case 200:
        dispatch(getFeedSuccess(feedResponse.data.Feed));
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Action untuk membersihkan data feed.
 */
export const clearState = () => async (dispatch) => {
  dispatch(onClear());
};
