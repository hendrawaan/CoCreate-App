import { ADD_USER, GET_PROFILE, LOGIN } from "./api-list";

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
    }).then((res) => res.json());
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
  async post(endPoint, data) {
    return await this.fetchToApi(endPoint, "POST", data);
  },
};

/**
 * Digunkan untuk melakukan login ke API
 * @param {objek} dataLogin Data autentikasi yang akan dikirim
 * @returns json objek
 */
export const loginToApi = async (dataLogin) =>
  await api.post(LOGIN, JSON.stringify(dataLogin));

export const registeringUser = async (dataReg) =>
  await api.post(ADD_USER, JSON.stringify(dataReg));

export const getUserDetail = async (token) =>
  await api.get(GET_PROFILE, { "Authorization": token });
