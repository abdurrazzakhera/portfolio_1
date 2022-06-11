import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [projectDetails, setProjectsDetails] = useState({});
  const { projectId } = useParams();
  useEffect(() => {
    fetch(`https://radiant-caverns-08287.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectsDetails(data);
      });
  }, [projectId]);
  console.log(projectDetails);
  return <div>nnn:{projectDetails.project_name}</div>;
};

export default ProjectDetails;
