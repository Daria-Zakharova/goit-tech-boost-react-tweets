import { useEffect, useState } from "react";
import { RatingWrap } from "./Rating.styled";
import { getPopularTweet } from "../../api/getPopularTweet";
import { TweetCard } from "../TweetCard/TweetCard";
import { Loader } from "../Loader/Loader";

export const Rating = () => {
  const [topTweet, setTopTweet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTopTweet = async () => {
      const tweet = await (await getPopularTweet()).data;
      setTopTweet(tweet[0]);
      setIsLoading(false);
    };
    try {
      setIsLoading(true);
      getTopTweet();
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
    }
  }, []);

  return (
    <RatingWrap>
      {isLoading ? (
        <Loader />
      ) : (
        topTweet && <TweetCard tweet={topTweet} variant="rating" />
      )}
    </RatingWrap>
  );
};
