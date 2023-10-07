import { useUserStore } from "@/stores/user";
import { client } from "./api";
import { AxiosRequestConfig } from "axios";

export const api = async (
  type: string,
  url: string,
  data = {},
  auth = true
) => {
  let res: any;
  let config: AxiosRequestConfig = {};

  try {
    if (auth) {
      const user = useUserStore.getState().user;

      config = {
        headers: {
          Authorization: `${user.accessToken}`,
        },
      };
    }

    // Decide which method to use based on the passed type
    if (type === "GET") {
      res = await client.get(url, config);
    } else if (type === "POST") {
      res = await client.post(url, data, config);
    }

    // If the response is not 200 (successful), throw an error
    if (res?.status !== 200) {
      throw new Error((res?.response || res).data || "Something went wrong");
    } else {
      // If the response is successful, return the data
      res = res?.data || {};
    }
  } catch (e: any) {
    // TODO: Implement error handling
    // res = { error: e?.response?.data };
    res = {};
  }

  return res;
};
