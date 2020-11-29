import React from "react";
import { connect } from "react-redux";

import { getNextFriend } from "../../common/mockData";
import * as actions from "../state";

import FriendList from "../component/FriendList";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

const ageLimitOptions = [
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  MAX_AGE_LIMIT,
];
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];

class FriendMain extends React.Component {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };

  render() {
    console.log("FriendMain render");
    const {
      friendsWithAgeLimit,
      friendsWithAgeShowLimit,
      ageLimit,
      showLimit,
      setAgeLimit,
      setShowLimit,
    } = this.props;

    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <NumberSelect
          onChange={setAgeLimit}
          value={ageLimit}
          options={ageLimitOptions}
          postfix="세 이하만 보기"
        />
        <FriendList friends={friendsWithAgeLimit} />
        <NumberSelect
          onChange={setShowLimit}
          value={showLimit}
          options={showLimitOptions}
          postfix="명 이하만 보기(연령 제한 적용)"
        />
        <FriendList friends={friendsWithAgeShowLimit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { friends, ageLimit, showLimit } = state.friend;

  const friendsWithAgeLimit = friends.filter(
    (friend) => friend.age <= ageLimit
  );
  const friendsWithAgeShowLimit = friendsWithAgeLimit.slice(0, showLimit);

  return { friendsWithAgeLimit, friendsWithAgeShowLimit, friends, ageLimit };
};

export default connect(mapStateToProps, actions)(FriendMain);
