import { SET_LOADING, CHANGE_IMAGE } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  imageStatus: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case CHANGE_IMAGE:
      return {
        ...state,
        imageStatus: !state.imageStatus
      };

    default:
      return state;
  }
};
