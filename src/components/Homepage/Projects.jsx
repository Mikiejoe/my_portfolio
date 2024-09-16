import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";

function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getProjects = async () => {
    setLoading(true)
    const response = await fetch(
      "https://portfolio-backend-tesg.onrender.com/api/projects/"
    );
    const data = await response.json();
    setProjects(data);
    setLoading(false)
    console.log("projects", data);
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div id="projects" className="p-4  space-y-4">
      <div className="flex  mb-7 space-x-2">
        <div className="w-2 bg-secondary "></div>
        <h1 className="text-4xl font-bold text-white ">Projects</h1>
      </div>

      <div className=" text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4">
        {loading ? (
          <>
            <div className="animate-pulse bg-gray-300 rounded-lg h-64"></div>
            <div className="animate-pulse bg-gray-300 rounded-lg h-64"></div>
            <div className="animate-pulse bg-gray-300 rounded-lg h-64"></div>
            <div className="animate-pulse bg-gray-300 rounded-lg h-64"></div>
          </>
        ) : (
          projects.map((item, index) => (
            <ProjectItem
              key={index}
              description={item.description}
              link={item.url}
              image={item.image}
              name={item.title}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Projects;
