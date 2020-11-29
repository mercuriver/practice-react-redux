import React from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";

class FriendMain extends React.PureComponent {
  state = {
    friends: store.getState().friend.friends,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ friends: store.getState().friend.friends });
    });
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
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default FriendMain;
