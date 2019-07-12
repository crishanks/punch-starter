import React from 'react';

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h3>{props.header}</h3>
    </div>
  );
}

export default SectionHeader;