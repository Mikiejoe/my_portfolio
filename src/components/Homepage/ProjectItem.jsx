import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ project, className }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/projects/${project.slug}`)
      }
      // scroll-item flex-shrink-0 mx-2 w-[300px] h-[250px] bg-gray-200 rounded-full shadow-md flex justify-center transition-transform duration-300

      className={`bg-primary cursor-pointer h-full rounded-md overflow-hidden shadow-blue-300 shadow-md mr-2 ${className}`}
    >
      <div>
        <div className="h-1/2 overflow-hidden">
          <img
            src={project.images[0].image}
            alt={project.title}
            className="hover:scale-125 object-cover h-[200px] w-full transition-all duration-700"
          />
        </div>
        <div className="px-2 py-2">
          <h2 className="font-bold text-secondary">{project.title}</h2>
          <p className="line-clamp-4 h-[100px] text-gray-300">
            {project.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
