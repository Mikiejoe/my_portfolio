import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import { div } from "framer-motion/client";
import { BsBrowserChrome, BsGithub } from "react-icons/bs";
import { useLocation, Link, useNavigate } from "react-router-dom";

function ProjectPage() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const getProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://portfolio-backend-sigma-three.vercel.app/api/projects/"
      );
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      console.log("projects", data);
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className="min-h-screen md:px-32 p-4">
      <Navbar />

      <div className="mt-[70px] h-full">
        {projects.map((project, index) => (
          <div className={`mb-6 rounded-lg flex justify-center overflow-clip shadow-cyan-700 shadow-md  w-full h-[250px] ${
            index % 2 == 0 ? "md:flex-row-reverse" : ""
          }`}>
            <div
              className={`${
                index % 2 == 0 ? "md:float-left" : "md:float-right"
              } w-full h-full`}
            >
              <div
                className={`bg-primary shadow-cyn-700 shadow-lg overflow-clip rounded-m h-full w-full flex md:flex-col`}
              >
                <div className="p-2 bg-green-300">
                  <h1 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h1>
                  <p className="text-gray-600 line-clamp-4">
                    {project.overview}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 p-1">
                  {project.technology.split(",").map((tech, index) => (
                    <span
                      className="bg-gray-600 py-2 px-3 text-sm rounded-[32px]"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <section className="links p-2">
                  <div className="flex gap-2">
                    <Link
                      to={project.github_url}
                      className="bg-gray-600 py-2 px-3 rounded-[32px] flex gap-2 items-center "
                    >
                      <BsGithub className="text-white" />
                      <p className="text-sm text-white">Github</p>
                    </Link>
                    <Link
                      to={project.project_url}
                      className="bg-gray-600 cursor-pointer py-2 px-3 rounded-[32px] flex gap-2 items-center"
                    >
                      <BsBrowserChrome className="text-white" />
                      <p className="text-sm text-white">Live Project</p>
                    </Link>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="bg-gray-600 cursor-pointer py-2 px-3 rounded-[32px] flex gap-2 items-center"
                    >
                      
                      <p className="text-sm text-white">Read More</p>
                    </Link>
                  </div>
                </section>
              </div>
            </div>
            <div className="h-full w-full bg-red-200">
              <img src={project.images[0].image} alt=""  className="h-full w-full object-cover"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
