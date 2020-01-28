import {
  QUERY_FOOD,
  TOGGLE_SEARCH,
  UPDATE_QUERY,
  QUERY_FOOD_SUCCESS,
  QUERY_FOOD_FAIL,
  GET_DETAILS_SUCCESS,
} from '../action-types.js';

const initialState = {
  food: [],
  isSearchEnabled: false,
  query: '',
  foodDetails: {},
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_FOOD:
      return {...state, isSearchEnabled: false};
    case QUERY_FOOD_SUCCESS:
      return {...state, isSearchEnabled: false, food: action.foods};
    case QUERY_FOOD_FAIL:
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
      return {
        ...state,
        foodDetails: action.foodDetails,
      };
    default:
      return {...state};
  }
}
