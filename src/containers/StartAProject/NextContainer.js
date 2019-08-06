import React, { Component } from 'react';

//Components
import SquareButton from '../../components/Home/SquareButton';

export default class NextContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="next-container-blurb">
          <p>{this.props.blurb}</p>
        </div>
        <SquareButton title={"Next: Project idea"}/>
      </>
    );
  }
}