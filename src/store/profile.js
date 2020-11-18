import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile, updateUserPassword, updateUserProfile } from "../api/";

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
        updatePasswordFailed: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
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
    updatePasswordFailed,
    updatePasswordSuccess
} = profileSlice.actions;

/**
 * Mengambil profil singkat user.
 * @param {string} token Data token yang akan digunakan untuk Authorization
 */
export const getProfile = (token) => async(dispatch) => {
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
export const updateProfile = ({ name, username, email, address, tanggal_lahir, gender, phone, post_code, short_bio }, token) => async(dispatch) => {
    try {
        console.log(name, username, email, address, tanggal_lahir, gender, phone, post_code, short_bio)
        const response = await updateUserProfile({ name, username, email, address, tanggal_lahir, gender, phone, post_code, short_bio });

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
export const updatePassword = ({ password_lama, password_baru }, token) => async(dispatch) => {
    try {
        const response = await updateUserPassword({ password_lama, password_baru }, token);

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