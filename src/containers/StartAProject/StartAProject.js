import React, { useState } from 'react';

//Components
import PreviewTitle from '../../components/Home/PreviewTitle';
import ShortDescription from '../../components/Home/ShortDescription';
import DropDownMenu from '../../components/StartAProject/DropDownMenu';
import DropDownMenuSelector from '../../components/StartAProject/DropDownMenuSelector';

const StartAProject = () => {
  const [clicked, toggleClick] = useState(false);
  return (
    <div className="start-a-project">
        <PreviewTitle title={"Let's get you set up."}/>
        <ShortDescription description={"Pick a project category to connect with a specific community. You can always update this later."}/>
        <div className="drop-down">
            <DropDownMenu 
              title={"Select your category"}
              toggleClick={toggleClick}
              clicked={clicked}
            />
        </div>
        {
        clicked ? (
          <div className="dropdown-menu-selector">
            <DropDownMenuSelector 
              categories={
                ["Art", "Comics & Illustration", "Design & Tech", "Film", "Food & Craft", "Games", "Music", "Publishing"]
              }
            />
          </div>
        ) : null
      }
    </div>
  );
}

export default StartAProject;