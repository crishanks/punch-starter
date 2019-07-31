import React from 'react';

const PreviewImage = (props) => {
  return (
    <img className="preview-image" src={props.image} alt="preview image"/>
  );
}

export default PreviewImage;