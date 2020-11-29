import React from "react";
import { connect } from "react-redux";

import { getNextFriend } from "../../common/mockData";
import * as actions from "../state";
import {
  makeGetFriendWithAgeLimit,
  getAgeLimit,
  getShowLimit,
} from "../state/selector";

import FriendList from "../component/FriendList";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT } from "../common";

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

class FriendMain extends React.Component {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };

  render() {
    console.log("FriendMain render");
    const { friendsWithAgeLimit, ageLimit, setAgeLimit } = this.props;

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
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getFriendWithAgeLimit = makeGetFriendWithAgeLimit();
  const mapStateToProps = (state, props) => {
    return {
      friendsWithAgeLimit: getFriendWithAgeLimit(state, props),
      ageLimit: getAgeLimit(state, props),
      showLimit: getShowLimit(state),
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps, actions)(FriendMain);
