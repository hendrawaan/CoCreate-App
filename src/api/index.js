import { ADD_USER, GET_PROFILE, LOGIN, UPDATE_PROFILE, UPDATE_PASSWORD, GET_USER_PROFILE } from "./api-list";

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
    await api.put(UPDATE_PROFILE, JSON.stringify(dataProf), { Authorization: token });
/**
 * Mengupdate password user
 * @param {objek} data password yang dikirimkan
 * @returns json objek
 */
export const updateUserPassword = async (dataPas, token) =>
    await api.put(UPDATE_PASSWORD, JSON.stringify(dataPas), { Authorization: token });

/**
 * Mengambil data semua user
 * @param {string} token Data token yang akan digunakan untuk Authorization
 * @returns json objek
 */
// export const getUserAllAdmin = async (token) =>
//     await api.get(LIST_USERS_ADMIN, { Authorization: token });