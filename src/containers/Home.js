import React, { Component } from 'react';

//Components
import CategoryBar from './CategoryBar';
import ContentPreview from './ContentPreview';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <CategoryBar/>
        <ContentPreview 
          header="featured project"
          images={[""]}
          descriptionTitle="The Wolf of Baghdad Soundtrack"
          description="An audiovisual journey through a Jewish-Iraqi family's memories of their lost homeland."
          authorName="Carol Isaaacs (The Surreal McCoy)"
        />
      </div>
    );
  }
}