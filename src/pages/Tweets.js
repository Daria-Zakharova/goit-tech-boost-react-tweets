import { useEffect, useState } from "react";
import { getTweets } from "../api/getTweets";
import { PageWrap } from "../components/layout/PageWrap/PageWrap";
import { TweetList } from "../components/TweetList/TweetList";
import { Button } from "../components/Button/Button";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { Filter } from "../components/Filter/Filter";
import { subscription } from "../utils/subscription";
import { HomeLink } from "../components/HomeLink/HomeLink";
import { Loader } from "../components/Loader/Loader";

export const Tweets = () => {
  const { width } = useWindowDimensions();
  const limit = width < 768 ? 3 : width < 1200 ? 4 : 6;
  const [page, setPage] = useState(1);
  const [totalTweets, setTotalTweets] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState([]);
  const filterOptions = ["show all", "following", "follow"];
  const [filter, setFilter] = useState(filterOptions[0]);
  const { isFollowing } = subscription;

  useEffect(() => {
    if (filter === "following") {
      const filteredTweets = totalTweets.filter(({ id }) => isFollowing(id));
      setTotalAmount(filteredTweets.length);
      setTweets(filteredTweets.slice(0, page * limit));
    }
    if (filter === "follow") {
      const filteredTweets = totalTweets.filter(({ id }) => !isFollowing(id));
      setTotalAmount(filteredTweets.length);
      setTweets(filteredTweets.slice(0, page * limit));
    }
  }, [page, limit, filter, totalTweets, isFollowing]);

  // я розумію, що це так собі рішення, але безкоштовна версія мокапі наче не повертає count.
  useEffect(() => {
    const countTotalTweets = async () => {
      const totalTweets = await getTweets();
      setTotalTweets(totalTweets);
      setTotalAmount(totalTweets.length);
    };
    filter === "show all" && countTotalTweets();
  }, [filter]);

  // мало б забирати інфу з беку і для фільтрованих твітів, але чесно не зрозуміла, як там налаштувати фільтр
  useEffect(() => {
    const loadTweets = async () => {
      const newTweets = await getTweets({ page, limit });
      setTweets((prevTweets) =>
        page === 1 ? newTweets : [...prevTweets, ...newTweets]
      );
      setIsLoading(false);
    };

    try {
      if (filter === "show all") {
        setIsLoading(true);
        loadTweets();
      }
    } catch (e) {
      console.log(e.message);
      setIsLoading(false);
    }
  }, [limit, page, filter]);

  return (
    <PageWrap>
      <HomeLink />
      <Filter
        options={filterOptions}
        handleChoice={(option) => {
          setPage(1);
          setFilter(option);
        }}
      />
      {isLoading && page === 1 ? <Loader /> : <TweetList tweets={tweets} />}
      {totalAmount > tweets.length && (
        <Button
          isLoading={isLoading}
          isActive={true}
          btnTxt="load more"
          onClick={async () => {
            setPage((page) => page + 1);
          }}
        />
      )}
    </PageWrap>
  );
};
