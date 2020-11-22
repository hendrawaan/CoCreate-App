import {
  ADD_FEED_CATEGORY,
  ADD_USER,
  DAFTAR_KATEGORI_FEED,
  GET_DETAIL_FEED,
  GET_MY_POST,
  GET_PROFILE,
  GET_USER_PROFILE,
  GOOGLE_LOGIN_CALLBACK,
  LIST_FEED_TRENDING,
  LIST_USERS,
  LOGIN,
  UPDATE_FEED_CETEGORY,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,
  VERIFIKASI,
  GET_MY_CATEGORY,
  ADD_MY_CATEGORY
} from "./api-list";

const api = {
  /**
   * Digunakan untuk fetch ke API.
   * @param {string} endPoint Alamat url Endpoint API.
   * @param {string} methode Methode HTTP yang akan diginakan.
   * @param {objek} data data yang akan dikirim.
   * @returns json objek.
   */
  async fetchToApi(endPoint, methode, data, header = {}) {
    return fetch(endPoint, {
      method: methode,
      body: data,
      headers: { ...header, "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .catch(() => {
        throw new Error("Uppss.. Terjadi kesalahan.");
      });
  },

  /**
   * Digunakan untukn melalukan get ke endpoint.
   * @param {string} endPoint Alamat url Endpoint API.
   * @param {string} header Header yang akan dikirm
   */
  async get(endPoint, header) {
    return await this.fetchToApi(endPoint, "GET", null, header);
  },

  /**
   * Digunakan untuk melakukan post ke endpoint.
   * @param {string} endPoint Alamat url Endpoint API.
   * @param {object} data Data yang akan dikirim.
   * @returns json objek.
   */
  async post(endPoint, data, header) {
    return await this.fetchToApi(endPoint, "POST", data, header);
  },

  /**
   * Digunakan untuk melakukan put ke endpoint.
   * @param {string} endPoint Alamat url Endpoint API.
   * @param {object} data Data yang akan dikirim.
   * @returns json objek.
   */
  async put(endPoint, data, header) {
    return await this.fetchToApi(endPoint, "PUT", data, header);
  },
};

/**
 * Login ke API
 * @param {objek} dataLogin Data autentikasi yang akan dikirim
 * @returns json objek
 */
export const loginToApi = async (dataLogin) =>
  await api.post(LOGIN, JSON.stringify(dataLogin));

/**
 * Login ke dengan menggunakan Google Login OATH 2
 * @param {objek} dataLogin Data autentikasi yang akan dikirim
 * @returns json objek
 */
export const loginWithGoogleOATH = async (params) =>
  await api.get(GOOGLE_LOGIN_CALLBACK + params, null);

/**
 * Mendaftarkan user
 * @param {objek} dataReg Data registrasi user yang akan dikirim
 * @returns json objek
 */
export const registeringUser = async (dataReg) =>
  await api.post(ADD_USER, JSON.stringify(dataReg));

/**
 * Mengambil informasi profil user
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @returns json objek
 */
export const getUserProfile = async (token) =>
  await api.get(GET_PROFILE, { Authorization: token });

/**
 * Mengambil informasi profil user lain
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @returns json objek
 */
export const getAnotherUserProfile = async (token, id) =>
  await api.get(GET_USER_PROFILE + id, { Authorization: token });

/**
 * Mengupdate profile user
 * @param {objek} dataProfil yang dikirimkan
 * @returns json objek
 */
export const updateUserProfile = async (dataProf, token) =>
  await api.put(UPDATE_PROFILE, JSON.stringify(dataProf), {
    Authorization: token,
  });

/**
 * Mengupdate password user
 * @param {objek} data password yang dikirimkan
 * @returns json objek
 */
export const updateUserPassword = async (dataPas, token) =>
  await api.put(UPDATE_PASSWORD, JSON.stringify(dataPas), {
    Authorization: token,
  });

/**
 * Mengambil data semua user
 * @param {string} options all, true, false
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @returns json objek
 */
export const getUserList = async (options, token) =>
  await api.get(LIST_USERS + options, { Authorization: token });

/**
 * Mengubah satus user ke verifikasi dan sebaliknya
 * @param {object} params Data id user dan status verifikasinya
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @returns json objek
 */
export const changeUserVerification = async (params, token) =>
  await api.post(VERIFIKASI, JSON.stringify(params), {
    Authorization: token,
  });


/**
 * Mengambil daftar feed yang trending
 * @param {object} params Data id user dan status verifikasinya
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @returns json objek
 */
export const getListFeedTrending = async () =>
  await api.get(LIST_FEED_TRENDING, {});

/**
 * Mengambil Daftar Kategori Feed
 * @returns json objek
 */
export const getListFeedCategory = async () =>
  await api.get(DAFTAR_KATEGORI_FEED, {});

/**
 * Mengambil Detail Suatu Feed
 * @returns json objek
 */
export const getDetailFeed = async (id) =>
  await api.get(GET_DETAIL_FEED + id, {});

/**
 * Menambahkan kategori Feed
 * @param {objek} newCategory Data ketegori baru yang akan ditambahkan
 * @returns json objek
 */
export const addFeedCategory = async (newCategory, token) =>
  await api.post(ADD_FEED_CATEGORY, JSON.stringify(newCategory), {
    Authorization: token,
  });

/**
 * Mengupdate kategori Feed
 * @param {objek} modifiedCategory data kategori yang akan diubah
 * @returns json objek
 */
export const updateFeedCategory = async (modifiedCategory, token) =>
  await api.put(UPDATE_FEED_CETEGORY, JSON.stringify(modifiedCategory), {
    Authorization: token,
  });

/**
 * Mengambil informasi post milik sendiri
 * @param {string} endpoint id dari postingan
 * @returns json objek
 */
export const getMyOwnPost = async (token) =>
  await api.get(GET_MY_POST, { Authorization: token });

  /**
 * Mengambil informasi post milik sendiri
 * @param {string} endpoint id dari postingan
 * @returns json objek
 */
export const getMyCategory = async (token) =>
await api.get(GET_MY_CATEGORY, { Authorization: token });

/**
 * Menambahkan kategori saya
 * @param {objek} newCategory Data ketegori baru yang akan ditambahkan
 * @returns json objek
 */
export const addMyCategory = async (data, token) =>
  await api.post(ADD_MY_CATEGORY, JSON.stringify(data), {
    Authorization: token
  });