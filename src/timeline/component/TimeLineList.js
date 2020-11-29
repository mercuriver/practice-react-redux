import React from "react";

// eslint-disable-next-line react/prop-types
function TimeLineList({ timelines }) {
  return (
    <ul>
      {timelines.map((timeline, index) => (
        <li key={`${timeline.desc}_${index}`}>{timeline.desc}</li>
      ))}
    </ul>
  );
}

export default TimeLineList;
