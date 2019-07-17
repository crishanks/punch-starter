import React, { Component } from 'react';

//Components
import SectionHeader from '../components/SectionHeader';
import ProjectPreview from './ProjectPreview';
import NumberedSelector from '../components/NumberedSelector'

export default class Recommended extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="recommended-component-container">
        <SectionHeader header={"recommended"}/>
        <ProjectPreview
          image={"https://ksr-ugc.imgix.net/assets/025/121/443/7899f0ae541e4796a7f5bee023456302_original.png?ixlib=rb-2.1.0&crop=faces&w=560&h=315&fit=crop&v=1557769029&auto=format&frame=1&q=92&s=eb5ec269ccbaaac8d012d615853f4eeb"}
          title={"DopeKicks - The 1st waterproof hemp shoes"}
          percentage={"2,153"}
          authorName={"DopeKicks"}
          heart={true}
        />
        <ProjectPreview
          image={"https://ksr-ugc.imgix.net/assets/025/649/592/3a06be8fe29393eba15ba5523b8f647c_original.jpg?ixlib=rb-2.1.0&crop=faces&w=560&h=315&fit=crop&v=1561804221&auto=format&frame=1&q=92&s=2775306e2d5809d61a246106dc99fc9b"}
          title={"Apollo 11 - An Epic Moon Landing Flip Book Edition"}
          percentage={"546"}
          authorName={"Flipboku"}
          heart={true}
        />
        <ProjectPreview
          image={"https://ksr-ugc.imgix.net/assets/025/684/173/7332ccfbb948ed534bd402472f73275a_original.png?ixlib=rb-2.1.0&crop=faces&w=560&h=315&fit=crop&v=1562094298&auto=format&frame=1&q=92&s=0b2685300960b22361073338252e1ac1"}
          title={"Trial By Trolley"}
          percentage={"2,465"}
          authorName={"Cyanide And Happiness"}
          heart={true}
        />
        <NumberedSelector/>
      </div>
    );
  }
}