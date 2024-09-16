import React from "react";

function About() {
  return (
    <div id="about" className="p-4 md:py-16 bg-primary-bg space-y-4 text-white">
      <div className="flex space-x-2">
        <div className="w-2 bg-secondary "></div>
        <h1 className="text-4xl font-bold">About</h1>
      </div>
      <div className="flex flex-col-reverse mt-12 md:flex-row md:gap-16 gap-4 lg:h-[60vh] items-center justify-center">
        <p className="text-gray-300 text-xl flex-1">
          Hi, I'm Joseph Omondi, an aspiring full-stack developer with a passion
          for building dynamic and user-centric web and mobile applications. I
          have experience working with Django, React, Flutter, and Node.js,
          which allows me to deliver seamless solutions from front-end
          interfaces to robust back-end systems. Whether it's creating
          responsive websites, developing cross-platform mobile apps, or
          designing efficient APIs, I am driven by the desire to create
          innovative and impactful digital experiences. Explore my portfolio to
          see how I bring ideas to life through clean code, efficient design,
          and modern technologies.
        </p>
        <div className="flex-1 h-full w-full">
          <img
            src="https://avatars.githubusercontent.com/u/99811467?v=4"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
