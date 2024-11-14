import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SKILLS = [
  {
    name: "React",
    logo: "https://img.icons8.com/color/48/000000/react-native.png",
  },
  {
    name: "Django",
    logo: "https://img.icons8.com/color/48/000000/django.png",
  },
  {
    name: "Flutter",
    logo: "https://img.icons8.com/color/48/000000/flutter.png",
  },
  {
    name: "PostgreSQL",
    logo: "https://img.icons8.com/color/48/000000/postgreesql.png",
  },
  {
    name: "Git",
    logo: "https://img.icons8.com/color/48/000000/git.png",
  },
  {
    name: "GitHub",
    logo: "https://img.icons8.com/color/48/000000/github--v1.png",
  },
  {
    name: "Firebase",
    logo: "https://img.icons8.com/color/48/000000/firebase.png",
  },
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", stiffness: 50, duration: 2, ease: "linear" },
    },
  };
  const ImageVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 2, stiffness: 50, ease: "linear" },
    },
  };

  useEffect(() => {
    document.title = "About - Joseph Omondi";
  }, []);

  return (
    <motion.div
      id="about"
      className="pt-16 px-4 md:pt-20 bg-primary-bg space-y-4 text-white"
    >
      <div className="flex space-x-2">
        <div className="w-2 bg-secondary "></div>
        <h1 className="text-4xl font-bold">About</h1>
      </div>
      <div className="flex flex-col-reverse lg-12 lg:flex-row lg:gap-16 gap-4 lg:h-[60vh] items-center justify-center">
        <motion.div
          className="text-gray-300 text-xl flex-1 md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-300 text-xl flex-1">
            Hi, I'm Joseph Omondi, an aspiring full-stack developer with a
            passion for building dynamic and user-centric web and mobile
            applications.
          </p>
          <div className="mt-4">
            <h2 className="text-center text-2xl">My Skills</h2>
            <div className="flex items-center flex-wrap">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex bg-primary shadow-xl m-2 rounded-xl p-2 justify-center items-center space-x-2"
                >
                  <img src={skill.logo} className="h-10 w-10" alt={skill.name} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={ImageVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 "
        >
          <div className="h-[400px] w-[400px] overflow-hiden p-4 bg-primary rounded-tl-[200px] rounded-tr-[350px] rounded-br-[200px] rounded-bl-[200px]">
            <img
              src="https://avatars.githubusercontent.com/u/99811467?v=4"
              alt=""
              className=" object-cover h-full w-full rounded-tr-[200px] rounded-tl-[300px] rounded-bl-[200px] rounded-br-[200px]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
