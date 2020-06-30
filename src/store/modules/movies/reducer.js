import {ACTION_TYPES} from './actionTypes';

const INITIAL_STATE = {
  favorited: [],
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_FAVORITES: {
      const {movie} = action.payload;

      const movieIndex = state.favorited.findIndex(
        (item) => item.id === movie.id,
      );

      if (movieIndex >= 0) {
        state.favorited.splice(movieIndex, 1);
      }

      return {
        ...state,
        favorited: [movie, ...state.favorited],
      };
    }
    case ACTION_TYPES.REMOVE_FROM_FAVORITES: {
      const {movieId} = action.payload;

      const movieIndex = state.favorited.findIndex(
        (item) => item.id === movieId,
      );

      if (movieIndex >= 0) {
        state.favorited.splice(movieIndex, 1);
      }

      return {
        ...state,
        favorited: state.favorited,
      };
    }
    default: {
      return state;
    }
  }
}
