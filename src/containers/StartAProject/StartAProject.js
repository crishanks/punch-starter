import React, { useState } from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import DropDownMenu from '../../components/StartAProject/DropDownMenu';
import NextContainer from './NextContainer';

const StartAProject = () => {
  const [dropDownClicked, toggleDropDownClick] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="start-a-project">
      <div className="page-number">
        <p>{pageNumber} of 3</p>
      </div>
      <PreviewTitle title={"Let's get you set up."}/>
      <ShortDescription description={"Pick a project category to connect with a specific community. You can always update this later."}/>
      <div className="drop-down-header" onClick={() => toggleDropDownClick(!dropDownClicked)}>
        <DropDownMenu 
          title={"Select your category"}
          dropDownClicked={dropDownClicked}
          toggleDropDownClick={toggleDropDownClick}
        />
      </div>
      <div className="next-container">
        <NextContainer 
          setPageNumber={setPageNumber} 
          pageNumber={pageNumber}
          blurb="Your first project! Welcome."
        />
      </div>
    </div>
  );
}

export default StartAProject;