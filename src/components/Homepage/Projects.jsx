import React, { useEffect, useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Projects = () => {
  const scrollRef = useRef(null);
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active circle

  const getProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://portfolio-backend-sigma-three.vercel.app/api/projects/"
      );
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      console.log("projects",data);
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

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300; // Adjust this value to control how far you scroll with each button click

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Function to handle scroll update and set active circle
  const updateScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;
    const itemWidth = container.clientWidth / 3; // Adjust the factor if the items differ in width
    const currentIndex = Math.round(container.scrollLeft / itemWidth);
    setActiveIndex(currentIndex);
  };

  const handleSwipe = (e) => {
    const container = scrollRef.current;
    const touchStartX = e.touches[0].clientX;
    let touchEndX = 0;

    container.addEventListener("touchmove", (event) => {
      touchEndX = event.touches[0].clientX;
    });

    container.addEventListener("touchend", () => {
      if (touchStartX - touchEndX > 50) {
        // Swiped left
        handleScroll("right");
      } else if (touchEndX - touchStartX > 50) {
        // Swiped right
        handleScroll("left");
      }
    });
  };

  return (
    <div id="projects" className="p4 space-y-4">
      <div className="flex mb-7 space-x-2">
        <div className="w-2 bg-secondary"></div>
        <h1 className="text-4xl font-bold text-white">Projects</h1>
      </div>

      <div className="relative">
        {/* Previous Button */}
        {/* <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10"
        >
          &#8592;
        </button> */}
        <div
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 cursor-pointer transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md z-10"
        >
          <BsArrowLeft size={24} className=" " />
        </div>

        {/* Scrollable Project Items */}
        <div
          ref={scrollRef}
          className="scroll-container flex overflow-x-auto no-scrollbar relative p-2"
          onScroll={updateScrollPosition}
          onTouchStart={handleSwipe}
        >
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div
                className="animate-pulse bg-gray-300 rounded-lg mx-2 h-64 w-80"
                key={index}
              ></div>
            ))
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            projects.map((item, index) => (
              <ProjectItem
                className="scroll-item flex-shrink-0 w-[300px] transition-transform duration-300"
                key={index}
                project={item}
              />
            ))
          )}
        </div>

        {/* Next Button */}
        <div
          onClick={() => handleScroll("right")}
          className="bg-primary absolute cursor-pointer z-10 right-0 top-1/2 transform -translate-y-1/2 font-bold  p-2 rounded-full shadow-md"
        >
          <BsArrowRight size={24} className="text-white" />
        </div>

      </div>
    </div>
  );
};

export default Projects;
