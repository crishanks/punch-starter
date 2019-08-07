import React, { Component } from 'react';

//Components
import SquareButton from '../../components/Home/SquareButton';

const NextContainer = (props) => {
  console.log('next container props: ', props)
  return (
    <>
    {
      //add logic that if there's a blurb, display the blurb, if not, display the button that goes to the previous page
    }
      <div className="next-container-blurb">
        {
          props.blurb ? <p>{props.blurb}</p> : <div onClick={() => props.setPageNumber(goToPreviousPage(props))}><p>{props.previousButtonText}</p></div>
        }
      </div>
      <div className="button-container" onClick={() => props.setPageNumber(goToNextPage(props))}>
        <SquareButton title={props.buttonTitle} />
      </div>
    </>
  );
}

const goToNextPage = (props) => {
  let currentPageNumber = props.pageNumber;
  return currentPageNumber >= 3 ? currentPageNumber : ++currentPageNumber;
}

const goToPreviousPage = (props) => {
  let currentPageNumber = props.pageNumber;
  return --currentPageNumber;
}

export default NextContainer;