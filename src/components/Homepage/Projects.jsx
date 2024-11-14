import React, { useEffect } from "react";
import Slider from "react-slick";
import ProjectItem from "./ProjectItem";
import Loading from "./Loading";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [length, setLength] = React.useState(0);

  const getProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://portfolio-backend-sigma-three.vercel.app/api/projects/"
      );
      if (!response.ok)  setError("Failed to load projects.");;
      const data = await response.json();
      
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setError("Failed to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // divide the projects into two arrays
  const firstThreeProjects = projects.slice(0, projects.length / 2);
  const secondThreeProjects = projects.slice(
    projects.length / 2 + 1,
    projects.length
  );

  return (
    <div id="projects" className="md:pt-20 pt-16 px-4 space-y-4">
      <div className="flex mb-7 space-x-2">
        <div className="w-2 bg-secondary"></div>
        <h1 className="text-4xl font-bold text-white">Projects</h1>
      </div>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <div className="p-4">
          <Slider {...settings}>
            {projects.map((project) => (
              <ProjectItem project={project} key={project.id} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Projects;
