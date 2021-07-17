import React from 'react';
import Button from 'react-bootstrap/Button';
import { Item } from 'react-photoswipe-gallery';
import { deletePhoto } from '../actions/photos';
import { connect } from 'react-redux';


const Photo = ({ id, dispatch }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePhoto(id));
  }

  return (
    <div className="photo-container">
      <Item className="new-photo"
        original={`${process.env.REACT_APP_BACKEND_URL}/photos/${id}`}
        thumbnail={`${process.env.REACT_APP_BACKEND_URL}/photos/${id}`}
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img className="photo"
            ref={ref} 
            onClick={open} 
            src={`${process.env.REACT_APP_BACKEND_URL}/photos/${id}`}
            alt="user selected file"
          />
        )}
      </Item>
      <Button onClick={handleDelete} type="submit">Delete</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(Photo);