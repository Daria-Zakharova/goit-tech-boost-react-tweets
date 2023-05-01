import { TweetCard } from "../TweetCard/TweetCard";
import { TweetListWrap } from "./TweetList.styled";

export const TweetList = ({ tweets }) => {
  return (
    <TweetListWrap>
      {tweets.map(({ id, ...tweet }) => (
        <li key={id}>
          <TweetCard tweet={{ ...tweet, id }} />
        </li>
      ))}
    </TweetListWrap>
  );
};
