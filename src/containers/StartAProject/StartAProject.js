import React, { useState } from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import DropDownMenu from '../../components/StartAProject/DropDownMenu';
import DropDownMenuSelector from '../../components/StartAProject/DropDownMenuSelector';

const StartAProject = () => {
  const [dropDownClicked, toggleDropDownClick] = useState(false);
  return (
    <div className="start-a-project">
        <PreviewTitle title={"Let's get you set up."}/>
        <ShortDescription description={"Pick a project category to connect with a specific community. You can always update this later."}/>
        <div className="drop-down-header">
          <DropDownMenu 
            title={"Select your category"}
            toggleDropDownClick={toggleDropDownClick}
            dropDownClicked={dropDownClicked}
          />
        </div>
        {
        dropDownClicked ? (
          <div className="dropdown-menu-selector">
            <DropDownMenuSelector 
              categories={ ["Art", "Comics & Illustration", "Design & Tech", "Film", "Food & Craft", "Games", "Music", "Publishing"]}
              toggleDropDownClick={toggleDropDownClick}
              dropDownClicked={dropDownClicked}
            />
          </div>
        ) : null
      }
    </div>
  );
}

export default StartAProject;