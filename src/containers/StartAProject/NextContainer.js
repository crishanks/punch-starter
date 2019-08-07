import React, { Component } from 'react';

//Components
import SquareButton from '../../components/Home/SquareButton';

const NextContainer = (props) => {
  console.log('next container props: ', props)
  return (
    <>
      <div className="next-container-blurb">
        <p>{props.blurb}</p>
      </div>
      <div className="button-container" onClick={() => props.setPageNumber(updatePageNumber(props))}>
        <SquareButton title={"Next: Project idea"} />
      </div>
    </>
  );
}

const updatePageNumber = (props) => {
  let currentPageNumber = props.pageNumber;
  return currentPageNumber >= 3 ? currentPageNumber : ++currentPageNumber;
}

export default NextContainer;