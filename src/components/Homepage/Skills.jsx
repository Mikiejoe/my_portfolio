import React from 'react'
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
  {
    name: "Nodejs",
    logo: "https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "Golang",
    logo: "https://img.icons8.com/color/48/golang.png",
  },
];

function Skills() {
  return (
    <section
        id="skills"
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12 animate-fade-in">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-3xl mx-auto duration-200">
            {SKILLS.map((skill,index) => (
              <div
                key={skill.name}
                className={`bg-gray-300 dark:bg-gray-700 flex flex-col-reverse items-center p-4 rounded-lg shadow-gray-400 shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="bg-gray-400 dark:bg-gray-600 rounded-full hover:rotate-45 transition-all duration-500">
                  <img
                    src={skill.logo}
                    className="bg-gray-200 dark:bg-gray-600 h rounded-full transition-all duration-500"
                  ></img>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills