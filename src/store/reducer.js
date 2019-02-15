import {INCREMENT, DECREMENT, ADD, SUBTRACT, FETCH_COUNTER_SUCCESS, FETCH_COUNTER_REQUEST} from "./actions";

const initialState = {
  counter: 15,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case ADD:
      return {
        ...state,
        counter: state.counter + action.amount
      };
    case SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.amount
      };
    case FETCH_COUNTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_COUNTER_SUCCESS:
      return {
        ...state,
        counter: action.counter,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
