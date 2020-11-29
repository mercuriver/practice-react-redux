import React from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";

class FriendMain extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAdd = () => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  };

  render() {
    console.log("FriendMain render");
    const { friends } = store.getState().friend;
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <FriendList friends={friends} />
      </div>
    );
  }
}

export default FriendMain;
