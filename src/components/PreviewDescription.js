import React from 'react';

const PreviewDescription = (props) => {
  return (
    <div className="preview-description">
      <h1>{props.descriptionTitle}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default PreviewDescription;