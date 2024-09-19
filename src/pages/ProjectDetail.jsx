import React, { useEffect } from "react";
import { useLocation, Link,useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  

  const { name, link, description, image } = location.state == null ? {name:"Project",link:"/",description:"This is a project",image:"https://via.placeholder.com/150"}: location.state.data;
  document.title = "Project - " + name;
  useEffect(() => {
    if (!location.state) {
     navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id=""
        className="text-white bg-primary/70  relative flex justify-between w-full items-center bg-gray-00 h-1/6"
      >
        <div className="z-[999] bg-primary/70 md:px-24 flex flex-col justify-center w-full py-[60px] pt-[120px] pl-4 h-full ">
          <p className="md:text-6xl text-3xl font-bold">{name}</p>
        </div>
        <div className="absolute left-0 top bg-red-500 w-screen h-full ">
          <img src={image} alt="" className="w-screen h-full  object-cover" />
        </div>
      </div>
      <div className="h-[55vh] px-4 sm:px-8 text-xl md:px-24 ">
        <p className="md:text-xl text-xl text-secondary font-bold">{name}</p>
        <p className="text-white">{description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
// {name,link,description,image,className}
