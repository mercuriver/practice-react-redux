import { createStore, combineReducers, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import timelineSaga from "../timeline/state/saga";

import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const sageMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sageMiddleware));
export default store;
sageMiddleware.run(timelineSaga);
