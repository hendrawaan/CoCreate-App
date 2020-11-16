import { LOGIN } from "./api-list";

const api = {

  /**
   * Digunakan untuk fetch ke API.
   * @param {string} endPoint Alamat url Endpoint API.
   * @param {string} methode Methode HTTP yang akan diginakan.
   * @param {objek} data data yang akan dikirim.
   * @returns json objek.
   */
  async fetchToApi(endPoint, methode, data) {
    return fetch(endPoint, {
      method: methode,
      body: data,
      headers: { "Content-type": "application/json" },
    }).then((res) => res.json());
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
export const loginToApi = async (dataLogin) => {
  return await api.post(LOGIN, JSON.stringify(dataLogin));
};
