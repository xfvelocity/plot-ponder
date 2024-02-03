import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create();

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

client.defaults.baseURL =
  import.meta.env.VITE_API_URL || "https://tst-api.plotponder.com";

export { client };
