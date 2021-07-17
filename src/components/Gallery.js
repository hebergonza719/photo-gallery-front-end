import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startLoadPhotos } from '../actions/photos';
import Photo from './Photo';
import { Gallery as Gal } from 'react-photoswipe-gallery'


const Gallery = ({ errors, photos, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(startLoadPhotos());
  }, [dispatch]);

  useEffect(() => {
    if (photos.length > 0) {
      setIsLoading(false);
    }
  }, [photos]);

  return (
    <div className="photos-list">
      {errors && errors.get_error && (
        <p className="errorMsg centered-message">{errors.get_error}</p>
      )}
      {isLoading? (
        <div className="loading-msg centered-message">Loading...</div>
      ) : (
        <Gal>
          {photos.map((photo) => <Photo key={photo._id} id={photo._id} />)}
        </Gal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(Gallery);