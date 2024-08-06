import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";

// const projects = [
//   {
//     title: "project 1",
//     description: "some decription",
//     link: "link to project"
//   },
//   {
//     title: "project 2",
//     description: "some decription",
//     link: "link to project"
//   },
//   {
//     title: "project 3",
//     description: "some decription",
//     link: "link to project"
//   },
// ]

function Projects() {
  const [projects, setProjects] = React.useState([]);
   const getProjects = async () => {
    const response = await fetch("https://portfolio-backend-tesg.onrender.com/api/projects/");
    const data = await response.json();
    setProjects(data);
    console.log("projects",data);
  }

  useEffect(() => {
    console.log("loading")
    getProjects();
  }, []);
  return (
    <div id="projects" className="p-4 md:p-16 space-y-4">
      <div className="flex  mb-7 space-x-2">
        <div className="w-2 bg-secondary "></div>
        <h1 className="text-4xl font-bold text-white ">Projects</h1>
      </div>

      <div className=" text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4">
        
          {projects.map((item, index) => (
            <ProjectItem key={index} description={item.description} link={item.url} image={item.image} name={item.title} />
          ))}
        
      </div>
    </div>
  );
}

export default Projects;
