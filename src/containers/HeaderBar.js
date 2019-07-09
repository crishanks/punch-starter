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
        <div>
          <LinkButton title="Explore" link="/"/>
          <LinkButton title="Start a project" link="/"/>
        </div>
        <div>
          <h2>PunchStarter</h2>
        </div>
        <div>
          <p>Search</p>
          <FontAwesomeIcon icon={faSearch}/>
          <ProfileImage image={"../src/assets/images/gorilla.png"}/>
        </div>
      </div>
    );
  }
}