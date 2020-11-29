import { createSelector } from "reselect";

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state, props) => props.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const makeGetFriendWithAgeLimit = () => {
  return createSelector([getFriends, getAgeLimit], (friends, ageLimit) =>
    friends.filter((friend) => friend.age <= ageLimit)
  );
};
