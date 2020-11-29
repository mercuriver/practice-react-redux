import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./common/store";

import TimeLineMain from "./timeline/container/TimeLineMain";
import FriendMain from "./friend/container/FriendMain";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FriendMain />
      <TimeLineMain />
    </div>
  </Provider>,
  document.getElementById("root")
);
