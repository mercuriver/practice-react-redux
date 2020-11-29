import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./common/store";

import FriendMain from "./friend/container/FriendMain";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FriendMain ageLimit={30} />
      <FriendMain ageLimit={15} />
    </div>
  </Provider>,
  document.getElementById("root")
);
