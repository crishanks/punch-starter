import React, { Component } from 'react';

//Components
import SquareButton from '../../components/Home/SquareButton';

const NextContainer = (props) => {
  return (
    <>
      <div className="next-container-blurb">
        <p>{props.blurb}</p>
      </div>
      <div className="button-container" onClick={(props) => props.setPageNumber(props.pageNumber++)}>
        <SquareButton title={"Next: Project idea"} />
      </div>
    </>
  );
}

export default NextContainer;