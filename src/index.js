import store from "./common/store";

import {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from "./timeline/state";
import { addFriend, removeFriend, editFriend } from "./friend/state";

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({ id: 1, desc: "샘플 데이터 코드" }));
store.dispatch(addTimeline({ id: 2, desc: "리덕스 코드" }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: "리덕스 코드 테스트" }));
store.dispatch(removeTimeline({ id: 1, desc: "샘플 데이터 코드" }));

store.dispatch(addFriend({ id: 1, desc: "김익명" }));
store.dispatch(addFriend({ id: 2, desc: "박실명" }));
store.dispatch(editFriend({ id: 2, desc: "박사실가명" }));
store.dispatch(removeFriend({ id: 1, desc: "김익명" }));
