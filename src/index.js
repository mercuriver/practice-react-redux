import React from "react";
import ReactDOM from "react-dom";
import TimeLineMain from "./timeline/container/TimeLineMain";
import FriendMain from "./friend/container/FriendMain";

ReactDOM.render(
  <div>
    <FriendMain />
    <TimeLineMain />
  </div>,
  document.getElementById("root")
);
