import { useEffect, useState } from "react";
import { RatingWrap } from "./Rating.styled";
import { getPopularTweet } from "../../api/getPopularTweet";
import { TweetCard } from "../TweetCard/TweetCard";

export const Rating = () => {
  const [topTweet, setTopTweet] = useState(null);

  useEffect(() => {
    const getTopTweet = async () => {
      const tweet = await (await getPopularTweet()).data;
      setTopTweet(tweet[0]);
    };
    getTopTweet();
  }, []);

  return (
    <RatingWrap>
      {topTweet && <TweetCard tweet={topTweet} variant="rating" />}
    </RatingWrap>
  );
};
