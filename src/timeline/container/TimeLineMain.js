import React from "react";
import { connect } from "react-redux";

import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";

import { actions } from "../state";
import TimeLineList from "../component/TimeLineList";

class TimeLineMain extends React.Component {
  // state = {
  //   timelines: store.getState().timeline.timelines,
  // };

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState({ timelines: store.getState().timeline.timelines });
  //   });
  // }
  //
  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  onLike = (e) => {
    const { timelines } = this.props;
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    this.props.requestLike(timeline);
  };

  onAdd = () => {
    const timeline = getNextTimeline();
    store.dispatch(actions.addTimeline(timeline));
  };

  render() {
    const { timelines, isLoading, error } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimeLineList timelines={timelines} onLike={this.onLike} />
        {!!isLoading && <p>전송 중...</p>}
        {!!error && <p>에러 발생: {error}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timelines: state.timeline.timelines,
  isLoading: state.timeline.isLoading,
  error: state.timeline.error,
});

export default connect(mapStateToProps, actions)(TimeLineMain);
