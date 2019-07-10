import React from 'react';

const PreviewHeader = (props) => {
  return (
    <div className="preview-header">
      <h3>{props.header}</h3>
    </div>
  );
}

export default PreviewHeader;