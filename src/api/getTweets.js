import axios from "axios";

axios.defaults.baseURL =
  "https://644cfc54cfdddac9709a4bd4.mockapi.io/tweeter/api/";

export const getTweets = async ({ page, limit } = {}) => {
  const result = await (
    await axios.get(
      `users?${
        (page ? "p=" + page + (limit ? "&" : "") : "") +
        (limit ? "l=" + limit : "")
      }`
    )
  ).data;

  return result;
};
