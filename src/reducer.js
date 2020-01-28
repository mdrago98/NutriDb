import {
  QUERY_FOOD,
  TOGGLE_SEARCH,
  UPDATE_QUERY,
  QUERY_FOOD_SUCCESS,
  QUERY_FOOD_FAIL,
  GET_DETAILS_SUCCESS,
  SAVE_EVENT,
} from './action-types.js';

const initialState = {
  food: [],
  isSearchEnabled: false,
  query: '',
  foodDetails: {},
  events: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_FOOD:
      return {...state, isSearchEnabled: false};
    case QUERY_FOOD_SUCCESS:
      return {...state, isSearchEnabled: false, food: action.foods};
    case QUERY_FOOD_FAIL:
      console.log(action.error);
      return {
        ...state,
        isSearchEnabled: false,
        error: action.error,
        causedBy: action.previousAction,
      };
    case TOGGLE_SEARCH:
      return {...state, isSearchEnabled: true};
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case GET_DETAILS_SUCCESS:
      console.log('action food details' + action.foodDetails);
      return {
        ...state,
        foodDetails: action.foodDetails,
      };
    case SAVE_EVENT:
      return {
        ...state,
        events: [...state.events, action.event],
      };
    default:
      return {...state};
  }
}
