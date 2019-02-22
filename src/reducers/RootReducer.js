

const rootReducer = (state={}, action) => {
  switch(action.type){
    case SELECT_CHANNEL:
      return { ...state, channel: action.channel };
    case REQUEST_POSTS:
      return { ...state, loading: true };
    case RECEIVE_POSTS:
      return { ...state, json: action.json, loading: false };
    default:
      return state;
  }
};

export default rootReducer;
