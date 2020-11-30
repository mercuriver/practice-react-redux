import React from "react";
import { connect } from "react-redux";

import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";

import { actions } from "../state";
import TimeLineList from "../component/TimeLineList";

class TimeLineMain extends React.Component {
  state = {
    currentText: "",
  };

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

  onChangeText = (e) => {
    const text = e.currentTarget.value;
    this.props.trySetText(text);
    this.setState({ currentText: text });
  };

  render() {
    const { timelines, isLoading, error, text } = this.props;
    const { currentText } = this.state;
    return (
      <div>
        <button onClick={this.onAdd}>타임라인 추가</button>
        <TimeLineList timelines={timelines} onLike={this.onLike} />
        {!!isLoading && <p>전송 중...</p>}
        {!!error && <p>에러 발생: {error}</p>}
        <input type="text" value={currentText} onChange={this.onChangeText} />
        {!!text && <p>{text}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timelines: state.timeline.timelines,
  isLoading: state.timeline.isLoading,
  error: state.timeline.error,
  text: state.timeline.text,
});

export default connect(mapStateToProps, actions)(TimeLineMain);
