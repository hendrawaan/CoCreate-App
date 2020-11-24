import { createSlice } from "@reduxjs/toolkit";
import {
  getDetailFeed,
  getListFeedCategory,
  getListFeedTrending,
  getMyOwnPost,
  getMyCategory,
  addMyCategory,
  getAnotherUserCategory,
  getAnotherUserFeeds,
  setLikeFeeds,
  deleteCommentFeeds,
  addCommentFeeds
} from "../api/";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    loading: true,
  },
  reducers: {
    onProcess: (state) => {
      state.loading = true;
    },
    onSuccess: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.feed = { ...state.feed, [payload.identifier]: payload.stateValue };
    },
    onFailed: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    onClear: (state, { payload }) => {
      state.feed = {
        [payload.identifier]: null,
      };
    },
  },
});

export default feedSlice.reducer;

const { onClear, onProcess, onFailed, onSuccess } = feedSlice.actions;

/**
 * Action untuk mengambil daftar feeds yang trending.
 */
export const getFeedsTrendingList = () => async (dispatch) => {
  try {
    dispatch(onProcess());
    const listResponse = await getListFeedTrending();
    switch (listResponse.code) {
      case 200:
        dispatch(
          onSuccess({
            identifier: "trendingList",
            stateValue: listResponse.data["feeds-trending"],
          })
        );
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
        dispatch(
          onSuccess({
            identifier: "categoryFeeds",
            stateValue: listResponse.data["kategori_feed"],
          })
        );
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
/**
 * Action untuk mengambil data kategory saya
 */
export const getMyFeedsCategory = (token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const listResponse = await getMyCategory(token);
    switch (listResponse.code) {
      case 200:
        dispatch(
          onSuccess({
            identifier: "myCategoryFeeds",
            stateValue: listResponse.data["kategori_follow"],
          })
        );
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
        dispatch(
          onSuccess({
            identifier: "feedDetail",
            stateValue: feedResponse.data["Feed"],
          })
        );
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
export const getFeedLiker = (id) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const feedResponse = await getDetailFeed(id);
    switch (feedResponse.code) {
      case 200:
        dispatch(
          onSuccess({
            identifier: "feedLiker",
            stateValue: feedResponse.data["liker"],
          })
        );
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
export const getFeedComment = (id) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const feedResponse = await getDetailFeed(id);
    switch (feedResponse.code) {
      case 200:
        dispatch(
          onSuccess({
            identifier: "feedComment",
            stateValue: feedResponse.data["comment"],
          })
        );
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
/**
 * Mengambil feed postingan sendiri.
 * @param {string} token Data token yang akan digunakan untuk Authorization.
 */
export const getMyFeeds = (token) => async (dispatch) => {
  try {
    const response = await getMyOwnPost(token);
    switch (response.code) {
      case 200:
        dispatch(
          onSuccess({
            identifier: "myFeeds",
            stateValue: response.data.feeds,
          })
        );
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
/**
 * Action untuk menambahkan kategori saya
 * @param {object} options True = Verfikasi user | False = Reject user
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const setMyFeedsCategory = ({ id_kategori, follow }, token) => async (
  dispatch
) => {
  try {
    dispatch(onProcess());
    const response = await addMyCategory({ id_kategori, follow }, token);
    switch (response.code) {
      case 200:
        dispatch(getMyFeedsCategory(token));
        dispatch(onSuccess());
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};

/**
 * Action untuk mengambil data feeds user lain
 */
export const getUserFeeds = (token, id) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const listResponse = await getAnotherUserFeeds(token, id);
    switch (listResponse.code) {
      case 200:
        dispatch(
          onSuccess({
            identifier: "userFeeds",
            stateValue: listResponse.data["feeds"],
          })
        );
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
/**
 * Action untuk mengambil data category user lain
 */
export const getUserCategory = (token, id) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const listResponse = await getAnotherUserCategory(token, id);
    switch (listResponse.code) {
      case 200:
        dispatch(
          onSuccess({
            identifier: "userCategory",
            stateValue: listResponse.data["kategori_follow"],
          })
        );
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
/**
 * Action set like
 * @param {object} options id feed dan like true | false
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const setLikeFeed = ({ id_feed, like }, token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const response = await setLikeFeeds({ id_feed, like }, token);
    switch (response.code) {
      case 200:
        dispatch(getFeed(id_feed));
        dispatch(onSuccess());
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
/**
 * Action add comment
 * @param {object} option id feed dan komentar
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const addCommentFeed = ({ id_feed, isi_komentar }, token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const response = await addCommentFeeds({ id_feed, isi_komentar }, token);
    switch (response.code) {
      case 200:
        dispatch(getFeedComment(id_feed));
        dispatch(onSuccess());
        break;
      default:
        throw new Error("Uppss.. Terjadi kesalahan.");
    }
  } catch (e) {
    dispatch(onFailed(e.message));
  }
};
/**
 * Action delete comment
 * @param {string} id komentar
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const deleteCommentFeed = (id, token) => async (dispatch) => {
  try {
    dispatch(onProcess());
    const response = await deleteCommentFeeds(id, token);
    switch (response.code) {
      case 200:
        //dispatch(getFeed(id_feed));
        dispatch(onSuccess());
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
export const clearFeedState = (identifier) => async (dispatch) => {
  dispatch(onClear(identifier));
};
