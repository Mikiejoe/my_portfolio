import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectItem({name,link,description,image}) {
  return (
    
    <Link to={link} className="bg-primary cursor-pointer rounded-md overflow-hidden shadow-blue-300 shadow-md">
      <div>
        <div className="h-1/2 overflow-hidden">
          <img
            src={image}
            alt=""
            className="hover:scale-125 object-cover h-[200px] w-full transition-all duration-700"
          />
        </div>
        <div className="px-2 py-2">
          <h2 className="font-bold text-secondary">{name}</h2>
          <p className="line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
