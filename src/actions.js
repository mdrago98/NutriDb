import {
  TOGGLE_SEARCH,
  UPDATE_QUERY,
  QUERY_FOOD_SUCCESS,
  QUERY_FOOD_FAIL,
  GET_DETAILS_SUCCESS,
  SAVE_EVENT,
} from './action-types.js';
import axios from 'axios';

export function updateQuery(newText) {
  return {
    type: UPDATE_QUERY,
    query: newText,
  };
}

export function queryFood(query) {
  console.log('Query food db with ' + query);
  return dispatch =>
    axios
      .get(
        `https://api.nal.usda.gov/fdc/v1/search?api_key=mljRlG6jlOstX5xM2ytvcqXzTK2Cho26KF92eIaw&generalSearchInput=${query}`,
      )
      .then(data => {
        dispatch(setFoodDetails(data));
      })
      .catch(err => {
        dispatch(handleQueryError(err));
      });
}

export function setFoodDetails(response) {
  return {
    type: QUERY_FOOD_SUCCESS,
    status: response.status,
    foods: response.data.foods,
  };
}

export function handleQueryError(error) {
  return {
    type: QUERY_FOOD_FAIL,
    status: error.status,
  };
}

export function toggleSearch(toggle = true) {
  return {
    type: TOGGLE_SEARCH,
    isSearchEnabled: toggle,
  };
}

export function getDetails(fdcId) {
  return dispatch => {
    axios
      .get(
        `https://api.nal.usda.gov/fdc/v1/${fdcId}?api_key=mljRlG6jlOstX5xM2ytvcqXzTK2Cho26KF92eIaw`,
      )
      .then(data => {
        console.log(data);
        dispatch(updateDetailedFoodState(data, fdcId));
      })
      .catch(err => {
        dispatch(handleQueryError(err));
      });
  };
}

export function updateDetailedFoodState(response, fdcId) {
  return {
    type: GET_DETAILS_SUCCESS,
    foodDetails: {
      fdcId: fdcId,
      description: response.data.description,
      foodClass: response.data.foodClass,
      publicationDate: response.data.publicationDate,
      nutrients: response.data.foodNutrients,
    },
  };
}

export function saveEvent(event) {
  return {
    type: SAVE_EVENT,
    event: {
      eventType: event.eventType,
      timeOfEvent: event.timeOfEvent,
      description: event.description || '',
    },
  };
}
