import { createSlice } from "@reduxjs/toolkit";
import { getDetailPost } from '../api/'
const postSlice = createSlice({
    name: "post",
    initialState: {},
    reducers: {
        onFailed: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
        },
        getDetailPostSuccess: (state, { payload }) => {
            state.error = null;
            state.loading = false;
            state.post = payload;
        }
    },
});
export default postSlice.reducer;
const {
    onFailed,
    getDetailPostSuccess,

} = postSlice.actions;
/**
 * Mengambil detail post dari useer.
 * @param {string} id dari post
 */
export const getPost = (id) => async(dispatch) => {
    try {
        const response = await getDetailPost(id);
        switch (response.code) {
            case 200:
                dispatch(getDetailPostSuccess(response.data));
                break;
            default:
                throw new Error("Uppss.. Terjadi kesalahan.");
        }
    } catch (e) {
        dispatch(onFailed(e.message));
    }
};