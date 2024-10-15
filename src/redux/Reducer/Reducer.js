// reducer.js

import { DECREMENT, INCREMENT } from "../Action/Action";



const initialState = {
  count: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state; // return the current state if action type is not recognized
  }
};

export default counterReducer;
