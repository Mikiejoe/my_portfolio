import React from "react";

const Projects = [
  {
    title: "Project 1",
    description: "This is a project",
    image: "https://github.com/Mikiejoe/Fee-Ussd-Application/raw/main/images/img3.jpg",
  },
  {
    title: "Project 2",
    description: "This is a project",
    image: "https://www.placeholder.com/300x300",
  },
  {
    title: "Project 3",
    description: "This is a project",
    image: "https://www.placeholder.com/300x300",
  },
  {
    title: "Project 4",
    description: "This is a project",
    image: "https://www.placeholder.com/300x300",
  },
  {
    title: "Project 5",
    description: "This is a project",
    image: "https://www.placeholder.com/300x300",
  },
  {
    title: "Project 6",
    description: "This is a project",
    image: "https://www.placeholder.com/300x300",
  },
];

function Portfolio() {
  return (
    <div id="portfolio" className="">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Projects.map((project, index) => (
          <div key={index} className="relative  hover:scale-y-105 max-h-[270px] transition-all ease-in-out duration-300 rounded-[20px] overflow-hidden">
            <img src={project.image} className="object-cover h-full w-full" alt="" />
            <div className="absolute bottom-0 w-full h-full z-[999] text-white/5 hover:bg-secondary hover:text-gray-800 flex items-center flex-col justify-end hover:bg-secondary/50 right-0 cursor-pointer">
              <p className="text-2xl font-bold">{project.title}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
