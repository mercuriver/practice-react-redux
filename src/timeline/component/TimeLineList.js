import React from "react";

// eslint-disable-next-line react/prop-types
function TimeLineList({ timelines, onLike }) {
  return (
    <ul>
      {timelines.map(({ id, desc, likes }) => (
        <li key={`timeline_${id}`}>
          {desc}
          <button data-id={id} onClick={onLike}>{`좋아요(${likes})`}</button>
        </li>
      ))}
    </ul>
  );
}

export default TimeLineList;
