import React from 'react';

const PreviewImage = (props) => {
  return (
    <div className="preview-image">
        <img src={props.image} alt="preview image"/>
    </div>
  );
}

export default PreviewImage;