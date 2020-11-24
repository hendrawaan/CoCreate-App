// Login page.
export const LOGIN = "/api/v1/login";

// Login with Google
export const GOOGLE_LOGIN_CALLBACK = "/callback";

// Mendaftarkan user baru.
export const ADD_USER = "/api/v1/user/add";

// Mendapatkan profile user
export const GET_PROFILE = "/api/v1/user/detail";

// Mengupdate data profile
export const UPDATE_PROFILE = "/api/v1/user/detail/update";

//Get all user by admin
export const LIST_USERS = "/api/v1/user/verifikasi/daftar/";

// Mengupdate password user
export const UPDATE_PASSWORD = "/api/v1/user/password/update";

//Mendapatkan profile user lain
export const GET_USER_PROFILE = "/api/v1/user/detail/";

// Validasi User
export const VERIFIKASI = "/api/v1/user/verifikasi/set";

// List Feed Trending
export const LIST_FEED_TRENDING = "/api/v1/feeds/trending";

// List Feed Kategori
export const DAFTAR_KATEGORI_FEED = "/api/v1/kategori/list"

// Get Detail Feed
export const GET_DETAIL_FEED = "/api/v1/feed/detail/"

// Add feed category
export const ADD_FEED_CATEGORY = "/api/v1/kategori/add"

// Update feed category
export const UPDATE_FEED_CETEGORY = "/api/v1/kategori/update"

//Get all user by admin
export const LIST_USERS_ADMIN = '/api/v1/user/verifikasi/daftar/all'

// User feeds
export const GET_MY_POST = '/api/v1/user/feeds'

// Get My Category
export const GET_MY_CATEGORY = '/api/v1/kategori/list/follow'
    // add Category
export const ADD_MY_CATEGORY = '/api/v1/kategori/set'
    // Get Another User Category
export const GET_USER_CATEGORY = '/api/v1/kategori/list/follow/'
    // Get Another User Feeds
export const GET_USER_FEEDS = '/api/v1/feeds/user/all/'
    // Set Like 
export const SET_LIKE_FEEDS = '/api/v1/feeds/like'
    // Delete Comment
export const DELETE_COMMENT_FEEDS = '/api/v1/feeds/comment/delete'
    // Add Coment
export const ADD_COMMENT_FEEDS = '/api/v1/feeds/comment/add'