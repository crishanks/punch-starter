import React, { useState } from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import DropDownMenu from '../../components/StartAProject/DropDownMenu';
import NextContainer from './NextContainer';
import LongTextInputBox from'../../components/StartAProject/LongTextInputBox';

const StartAProject = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [dropDownClicked, toggleDropDownClick] = useState(false);
  
  return (
    <div className="start-a-project">
      <div className="page-number">
        <p>{pageNumber} of 3</p>
      </div>
      {setPageAttributes()}
    </div>
  );

  function setPageAttributes() {
    if (pageNumber  === 1) {
      return (
        <>
          <PreviewTitle title={"Let's get you set up."}/>
          <ShortDescription description={"Pick a project category to connect with a specific community. You can always update this later."}/>
          <div className="drop-down-header" onClick={() => toggleDropDownClick(!dropDownClicked)}>
            <DropDownMenu 
              title={"Select your category"}
              dropDownClicked={dropDownClicked}
              toggleDropDownClick={toggleDropDownClick}
              categories={["Art", "Comics & Illustration", "Design & Tech", "Film", "Food & Craft", "Games", "Music", "Publishing"]}
            />
          </div>
          <div className="next-container">
            <NextContainer 
              setPageNumber={setPageNumber} 
              pageNumber={pageNumber}
              blurb="Your new project! Welcome."
              buttonTitle={"Next: Project idea"}
            />
          </div>
        </>
      );
    } else if (pageNumber === 2) {
      return (
        <>
          <PreviewTitle title={"Describe what you'll be creating."}/>
          <ShortDescription description={"And don't worry, you can edit this later, too."}/>
          <div className="text-input-box">
            <LongTextInputBox
              maxLength={"135"}
              cols={"90"} 
              rows={"5"}
            />
          </div>
          <div className="next-container">
            <NextContainer 
              setPageNumber={setPageNumber} 
              pageNumber={pageNumber}
              previousButtonText={"Category"}
              buttonTitle={"Next: Location"}
            />
          </div>
        </>
      );
    } else if (pageNumber === 3) {
      return (
        <>
          <PreviewTitle title={"Finally, let's confirm your eligibility."}/>
          <ShortDescription description={"Tell us where you're based and confirm a few other details before we proceed."}/>
          <div className="drop-down-header" onClick={() => toggleDropDownClick(!dropDownClicked)}>
            <DropDownMenu 
              title={"Select your country"}
              dropDownClicked={dropDownClicked}
              toggleDropDownClick={toggleDropDownClick}
              categories={["United States", "Great Britain", "Australia", "Mexico", "Paraguay", "Russia"]}
            />
          </div>
          <div className="next-container">
            <NextContainer 
              setPageNumber={setPageNumber} 
              pageNumber={pageNumber}
              previousButtonText={"Project Idea"}
              buttonTitle={"Continue"}
            />
          </div>
        </>
      );
    }
    return null;
  }
}

export default StartAProject;