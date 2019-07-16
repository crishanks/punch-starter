import React from 'react';

const PercentFunded = props => {
  return (
    <div className="percent-funded">
      <p>{props.percentage} funded</p>
    </div>
  );
}

export default PercentFunded;
