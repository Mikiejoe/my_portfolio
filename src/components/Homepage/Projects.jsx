import React, { useEffect, useRef } from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const scrollRef = useRef(null);
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://portfolio-backend-tesg.onrender.com/api/projects/");
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const autoScroll = () => {
      if (container) {
        const totalScrollWidth = container.scrollWidth;
        const containerWidth = container.clientWidth;

        container.scrollBy({ left: 1, behavior: "smooth" });

        if (container.scrollLeft >= totalScrollWidth - containerWidth) {
          container.scrollLeft = 0;
        }

        updateActiveItem();
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, [projects]);

  const updateActiveItem = () => {
    const container = scrollRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".scroll-item");
    const viewportCenter = container.clientWidth / 2;
    let closestItem = null;
    let closestDistance = Infinity;

    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distanceToCenter = Math.abs(viewportCenter - itemCenter);

      if (distanceToCenter < closestDistance) {
        closestDistance = distanceToCenter;
        closestItem = item;
      }

      item.classList.remove("active");
    });

    if (closestItem) {
      closestItem.classList.add("active");
    }
  };

  return (
    <div id="projects" className="p-4 space-y-4">
      <div className="flex mb-7 space-x-2">
        <div className="w-2 bg-secondary"></div>
        <h1 className="text-4xl font-bold text-white">Projects</h1>
      </div>

      <div
        ref={scrollRef}
        className="scroll-container flex overflow-x-auto relative whitespace-nowrap"
      >
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div className="animate-pulse bg-gray-300 rounded-lg h-64 w-80" key={index}></div>
          ))
        ) : (
          projects.map((item, index) => (
            <ProjectItem
              className="scroll-item flex-shrink-0 w-[300px] transition-transform duration-300"
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
};

export default Projects;
