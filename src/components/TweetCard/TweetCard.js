import { Avatar, CardTxt, TweetCardWrap } from "./TweetCard.styled";
import goitLogo from "../../img/goit-logo.png";
import { addSeparatingCommas } from "../../utils/addSeparatingCommas";
import { Button } from "../Button/Button";
import { subscription } from "../../utils/subscription";
import { useState } from "react";

export const TweetCard = ({
  tweet: { id, user, avatar, tweets, followers },
  variant = null,
}) => {
  const { isFollowing, follow, unfollow } = subscription;
  const [following, setFollowing] = useState(isFollowing(id));
  return (
    <TweetCardWrap variant={variant} id={id}>
      <img src={goitLogo} alt="GoIt school logo" width="76" height="22" />
      <Avatar>
        <img src={avatar} alt={`${user} avatar`} width="62" height="62" />
      </Avatar>
      <CardTxt>
        <p>{tweets} tweets</p>
        <p>
          {following
            ? addSeparatingCommas(followers + 1) + " "
            : addSeparatingCommas(followers) + " "}
          followers
        </p>
      </CardTxt>
      <Button
        isActive={following}
        btnTxt={following ? "following" : "follow"}
        onClick={(e) => {
          const id = e.target.closest("div").id;
          following ? unfollow(id) : follow(id);
          setFollowing(!following);
        }}
      />
    </TweetCardWrap>
  );
};
