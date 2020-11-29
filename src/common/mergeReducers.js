export default function mergeReducers(reducers) {
  return (state, action) => {
    if (!state) {
      return reducers.reduce((acc, r) => ({ ...acc, ...r(state, action) }), {});
    }
    let nextState = state;
    reducers.forEach((r) => {
      nextState = r(nextState, action);
    });
    return nextState;
  };
}
