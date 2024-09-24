import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { BsBrowserChrome, BsGithub } from "react-icons/bs";

function ProjectDetail() {
  const location = useLocation();
  const [project, setProject] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState();

  const getProject = async () => {
    try {
      const response = await fetch(
        `https://portfolio-backend-tesg.onrender.com/api/projects/${location.state.id}`
      );
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setProject(data);
      setLoading(false);
      // return data;
    } catch (error) {
      setError(error);
    }
  };

  document.title = "Project - " + project.title;
  useEffect(() => {
    getProject();
  }, []);
  if (loading)
    return (
      <div className="flex justify-center bg-primary items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-r-secondary border-primary-bg h-12 w-12   animate-spin"></div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Navbar />
      <div
        id=""
        className="text-white bg-primary/70 flex justify-between w-full items-center h-[300px] sm:h-[400px] md:h-[300px] lg:h-[400px]"
      >
        <img
          src={project.images[0].image}
          alt=""
          className="w-screen h-full  object-cover"
        />
      </div>
      <div className="project-details px-6 py-6 sm:px-12 md:px-16 lg:px-24">
        <section className="title mb-4">
          <h1 className="text-4xl font-bold text-secondary">{project.title}</h1>
        </section>
        <section className="technologies mb-4">
          <h2 className="text-lg font-bold text-gray-200 mb-2">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technology.split(",").map((tech, index) => (
              <span
                className="bg-gray-600 py-2 px-3 text-sm rounded-[32px]"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="overview mb-4">
          <h2 className="text-lg font-bold text-gray-200 mb-2">Overview</h2>
          <p className="text-gray-400">{project.overview}</p>
        </section>

        <section className="features mb-4">
          <h2 className="text-lg font-bold text-gray-200 mb-2">Key Features</h2>
          <ul className="list-disc pl-8 text-gray-400">
            {project.key_features.split(",").map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="development mb-4">
          <h2 className="text-lg font-bold text-gray-200 mb-2">
            Development Process
          </h2>
          <p className="text-gray-400">{project.development}</p>
        </section>

        <section className="conclusion mb-4">
          <h2 className="text-lg font-bold text-gray-200 mb-2">Conclusion</h2>
          <p className="text-gray-400">{project.conclusion}</p>
        </section>

        <section className="images mb-4">
          <h2 className="text-lg font-bold text-gray-200 mb-2">ScreenShots</h2>
          <div className="flex gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="w-1/3 h-[300px] rounded-md overflow-hidden bg-gray-400"
              >
                <img
                  src={image.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="links">
          <h2 className="text-lg font-bold text-gray-200 mb-2">Links</h2>
          <div className="flex gap-4">
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
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
// {name,link,description,image,className}
