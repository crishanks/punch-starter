import React, { Component } from 'react';

//Components
import LinkButton from '../components/LinkButton';

export default class CategoryBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="category-bar">
        <LinkButton title="Arts" link="/"/>
        <LinkButton title="Tech" link="/"/>
        <LinkButton title="Film" link="/"/>
        <LinkButton title="Games" link="/"/>
        <LinkButton title="Music" link="/"/>
      </div>
    );
  }
}