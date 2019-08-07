import React from 'react';

//Components
import LinkButton from '../../components/Home/LinkButton';

const CategoryBar = (props) => {
  return (
    <div className="category-bar-container">
      <div className="link-button-container">
        <LinkButton title="Arts" link="/"/>
        <LinkButton title="Comics & Illustration" link="/"/>
        <LinkButton title="Design & Tech" link="/"/>
        <LinkButton title="Film" link="/"/>
        <LinkButton title="Food & Craft" link="/"/>
        <LinkButton title="Games" link="/"/>
        <LinkButton title="Music" link="/"/>
        <LinkButton title="Publishing" link="/"/>
      </div>
    </div>
  );
}

export default CategoryBar;