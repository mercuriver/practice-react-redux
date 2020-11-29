import React from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
import { addTimeline } from "../state";
import TimeLineList from "../component/TimeLineList";

class TimeLineMain extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  };

  render() {
    console.log("TimelineMain render");
    const { timelines } = store.getState().timeline;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimeLineList timelines={timelines} />
      </div>
    );
  }
}

export default TimeLineMain;
