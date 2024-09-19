import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({name,link,description,image,className}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/projects/${name}`, { state: { data: {
      name,
      link,
      description,
      image
    } } });
  };
  return (
    
    <div onClick={handleClick}
    // scroll-item flex-shrink-0 mx-2 w-[300px] h-[250px] bg-gray-200 rounded-full shadow-md flex justify-center transition-transform duration-300
    
    className={`bg-primary cursor-pointer h-full rounded-md overflow-hidden shadow-blue-300 shadow-md mx-2 ${className}`}
    >
      <div>
        <div className="h-1/2 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="hover:scale-125 object-cover h-[200px] w-full transition-all duration-700"
          />
        </div>
        <div className="px-2 py-2 ">
          <h2 className="font-bold text-secondary">{name}</h2>
          <p className="line-clamp-3 h-[100px] text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
