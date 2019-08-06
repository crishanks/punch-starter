import React, { Component } from 'react';

//Components
import SquareButton from '../../components/Home/SquareButton';

const NextContainer = (props) => {
  return (
    <>
      <div className="next-container-blurb">
        <p>{props.blurb}</p>
      </div>
      <SquareButton 
        title={"Next: Project idea"} 
        pageNumber={props.pageNumber}
        setPageNumber={props.setPageNumber}
      />
    </>
  );
}

export default NextContainer;