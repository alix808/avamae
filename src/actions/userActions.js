import axios from 'axios';
import { SET_LOADING, CHANGE_IMAGE, GET_BANNER } from './types';

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

// Get logs from server
export const getBanner = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(
      'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
    );

    dispatch({
      type: GET_BANNER,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
