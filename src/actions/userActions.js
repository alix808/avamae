import { SET_LOADING, CHANGE_IMAGE } from './types';

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Change image
export const changeImage = () => {
  return {
    type: CHANGE_IMAGE
  };
};
