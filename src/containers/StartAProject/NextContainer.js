import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//Components
import SquareButton from '../../components/Home/SquareButton';

const NextContainer = (props) => {
  return (
    <>
      <div className="next-container-blurb">
        {
          props.blurb ? <p>{props.blurb}</p> : 
          <div className="previous-button" onClick={() => props.setPageNumber(goToPreviousPage(props))}>
            <FontAwesomeIcon className="icon arrow" icon={faArrowLeft}/>
            <p>{props.previousButtonText}</p>
          </div>
        }
      </div>
      {
        props.pageNumber === 3 ? 
        <div className="button-container">
          <SquareButton title={props.buttonTitle} link={"/login"}/>
        </div>
        : 
        <div className="button-container" onClick={() => props.setPageNumber(goToNextPage(props))}>
          <SquareButton title={props.buttonTitle}/>
        </div> 
      }
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