import React from "react";


function ProjectItem({ name, about, technologies, id }) {
  const technology = technologies.map((techno) => {
    return (<span key = {techno} > {techno} </span> )
  })
  return (
    <div key = {id} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technology}
      </div>
    </div>
  );
}

export default ProjectItem;
