import React from 'react';

//Components
import ProjectPreview from './ProjectPreview';
import SectionHeader from '../../components/Home/SectionHeader';

const MoreToExplore = (props) => {
  return (
    <>
      <SectionHeader header={"more to explore"}/>
      <div className="project-preview-containers-container">
        <ProjectPreview
          image={"https://ksr-static.imgix.net/f45yarxg-circa_solar.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=d53a612f062fc3091260f7c3be2796a2"}
          description={"Why this watchmaker thinks it's time to forget about time"}
          authorName={"Core77"}
        />
        <ProjectPreview
          image={"https://ksr-static.imgix.net/f45yarxg-circa_solar.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=d53a612f062fc3091260f7c3be2796a2"}
          description={"Why this watchmaker thinks it's time to forget about time"}
          authorName={"Core77"}
        />
        <ProjectPreview
          image={"https://ksr-static.imgix.net/f45yarxg-circa_solar.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=d53a612f062fc3091260f7c3be2796a2"}
          description={"Why this watchmaker thinks it's time to forget about time"}
          authorName={"Core77"}
        />
        <ProjectPreview
          image={"https://ksr-static.imgix.net/f45yarxg-circa_solar.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=d53a612f062fc3091260f7c3be2796a2"}
          description={"Why this watchmaker thinks it's time to forget about time"}
          authorName={"Core77"}
        />
      </div>
    </>
  );
}

export default MoreToExplore;
