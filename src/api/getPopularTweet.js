import axios from "axios";

export const getPopularTweet = async () => {
  const result = await axios.get("users?sortby=followers&p=1&l=1&order=desc");
  return result;
};
