import axios from 'axios';
import { getErrors } from './errors';

export const beginAddPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('photo', photo);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/photos`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const startLoadPhotos = () => {
  return async (dispatch) => {
    try {
      const photos = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/photos`);
      dispatch(loadPhotos(photos.data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const deletePhoto = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/photos/${id}`);
      const photos = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/photos`);
      dispatch(loadPhotos(photos.data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data))
    }
  };
};

export const loadPhotos = (photos) => ({
  type: 'LOAD_PHOTOS',
  photos
});