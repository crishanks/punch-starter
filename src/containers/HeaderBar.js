import React, { Component } from 'react';

//Components
import LinkButton from '../components/LinkButton';
import ProfileImage from '../components/ProfileImage';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class HeaderBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header-bar">
        <div className="header-link-buttons">
          <LinkButton title="Explore" link="/"/>
          <LinkButton title="Start a project" link="/"/>
        </div>
        <div className="logo">
          <h2>punchstarter</h2>
        </div>
        <div className="header-search-profile">
          <p>Search</p>
          <FontAwesomeIcon className="icon" icon={faSearch}/>
          <ProfileImage className="profile-image" image={"../src/assets/images/gorilla.png"}/>
        </div>
      </div>
    );
  }
}