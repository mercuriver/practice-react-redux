import React from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
import { addTimeline } from "../state";
import TimeLineList from "../component/TimeLineList";

class TimeLineMain extends React.PureComponent {
  state = {
    timelines: store.getState().timeline.timelines,
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ timelines: store.getState().timeline.timelines });
    });
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
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimeLineList timelines={this.state.timelines} />
      </div>
    );
  }
}

export default TimeLineMain;
