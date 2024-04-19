import React from "react";
import FinestExplorers from "../../assets/finestexplorers.jpg";
import PortfolioJpg from "../../assets/portfolio.jpg";
import { Link } from "react-router-dom";

const Projects = [
  {
    title: "Fee Ussd Application",
    description:
      "A mobile ussd application to pay fees for students in schools.",
    image:
      "https://github.com/Mikiejoe/Fee-Ussd-Application/raw/main/images/img3.jpg",
    link: "https://github.com/Mikiejoe/Fee-Ussd-Application/",
  },
  {
    title: "Finest Explorers",
    description: "Web application for travel and tours.",
    image: FinestExplorers,
    link: "https:finest-explorers.vercel.app",
  },
  {
    title: "Portfolio",
    description: "My portfolio webpage",
    image: PortfolioJpg,
    link: "https://mikiejoe.tech",
  },
];

function Portfolio() {
  return (
    <div id="portfolio" className="md:px-32 pt-[70px] px-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Projects.map((project, index) => (
          <Link to={project.link} key={index} className="bg-red-500 h-[270px] transition-all ease-in-out duration-300 hover:scale-y-105 rounded-[20px] overflow-hidden">
            <div
              key={index}
              className="relative  hover:scale-110 h-full transition-all ease-in-out duration-300 rounded-[20px] overflow-hidden"
            >
              <img
                src={project.image}
                className="object-cover h-full w-full"
                alt=""
              />
              <div className="absolute  w-full h-full z-[999] text-white/0 text-center hover:bg-secondary hover:text-white px-4 flex items-center flex-col justify-end hover:bg-secondary/50 right-0 bottom-0 p-4 cursor-pointer">
                <p className="text-2xl font-bold">{project.title}</p>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
