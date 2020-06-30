import {ACTION_TYPES} from './actionTypes';

export function addToFavorites({image, title, subtitle, id}) {
  return {
    type: ACTION_TYPES.ADD_TO_FAVORITES,
    payload: {
      movie: {image, title, subtitle, id},
    },
  };
}

export function removeFromFavorites({id}) {
  return {
    type: ACTION_TYPES.REMOVE_FROM_FAVORITES,
    payload: {
      movieId: id,
    },
  };
}
