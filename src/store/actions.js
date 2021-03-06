import {
  CHANGE_RADIO_SELECT,
  CHANGE_INPUT_SEARCH,
  CHANGE_FILMS_ARRAY,
} from './types';

export function changeRadioSelect(radioSelect) {
  return {
    type: CHANGE_RADIO_SELECT,
    payload: radioSelect,
  };
}

export function changeInputSearch(searchText) {
  return {
    type: CHANGE_INPUT_SEARCH,
    payload: searchText,
  };
}

export function changeFilmsArray(films) {
  return {
    type: CHANGE_FILMS_ARRAY,
    payload: films,
  };
}
