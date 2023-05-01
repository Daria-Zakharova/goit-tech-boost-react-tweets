export const subscription = {
  getFollowing: () => {
    return JSON.parse(localStorage.getItem("tweetSubscriptions")) || [];
  },
  saveFollowing: (subscriptionsArr) => {
    localStorage.setItem(
      "tweetSubscriptions",
      JSON.stringify(subscriptionsArr)
    );
  },
  isFollowing: (id) => {
    const userSubscriptions = subscription.getFollowing();
    return userSubscriptions.includes(id);
  },
  follow: (id) => {
    const userSubscriptions = subscription.getFollowing();
    userSubscriptions.push(id);
    subscription.saveFollowing(userSubscriptions);
  },
  unfollow: (id) => {
    const userSubscriptions = subscription.getFollowing();
    const updatedSubscriptions = userSubscriptions.filter((followedId) => {
      return followedId !== id;
    });
    subscription.saveFollowing(updatedSubscriptions);
  },
};
