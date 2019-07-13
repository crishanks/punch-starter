import React, { Component } from 'react';

//Components
import LinkButton from '../components/LinkButton';

export default class CategoryBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
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
}