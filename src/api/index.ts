import { client } from "./api";

export const api = async (type: string, url: string, data = {}) => {
  let res: any;
  const config = {};

  try {
    if (type === "GET") {
      res = await client.get(url, config);
    } else if (type === "POST") {
      res = await client.post(url, data);
    }

    if (res?.status !== 200) {
      throw new Error((res?.response || res).data || "Something went wrong");
    } else {
      res = res?.data || [];
    }
  } catch (e: any) {
    res = { error: e?.response?.data };
    // TODO: Implement error handling
  }

  return res;
};
