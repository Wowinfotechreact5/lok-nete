import axiosInstance from "./axiosInstance";

/* POST */
export const apiPost = async (
  url,
  data = {},
  config = {}
) => {
  try {
    const res = await axiosInstance.post(url, data, config);

    if (
      config.responseType !== "blob" &&
      res?.data?.statusCode === 401
    ) {
      throw new Error("Unauthorized");
    }

    return res.data;
  } catch (error) {
    throw error;
  }
};

/* GET */
export const apiGet = async (
  url,
  config = {}
) => {
  try {
    const res = await axiosInstance.get(url, config);

    if (res?.data?.statusCode === 401) {
      throw new Error("Unauthorized");
    }

    return res.data;
  } catch (error) {
    throw error;
  }
};
