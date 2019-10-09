import { SET_LOADING, CHANGE_IMAGE, GET_BANNER } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  imageStatus: true,
  banner: null
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

    case GET_BANNER:
      return {
        ...state,
        banner: action.payload.Details,
        loading: false
      };

    default:
      return state;
  }
};
