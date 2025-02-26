import useProjects from '../../hooks/useFetch';

function Projects() {
  
    const { projects, loading, error } = useProjects();
  return (
    <section
        id="projects"
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Featured Projects
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && !loading
              ? projects.slice(1).map((project,index) => (
                  <div
                    key={project.title}
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in animate-delay-${index * 100}`}
                  >
                    <img
                      src={project["images"][0].image}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technology.split(",").map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-indigo-100 cursor-pointer dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              : [1, 2, 3, 4].map((project) => (
                  <div
                    key={project}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200"
                  >
                    <div className="w-full h-48 object-cover animate-pulse bg-gray-400 rounded-sm dark:bg-gray-600"></div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold animate-pulse rounded-md p-2 bg-gray-900 dark:bg-white mb-2"></h3>
                      <p className="bg-gray-600 animate-pulse rounded-md  p-2 dark:bg-gray-300 mb-4"></p>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3].map((tech) => (
                          <span
                            key={tech}
                            className="px-6 py-3 animate-pulse bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                          >
                            {/* {tech} */}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
  )
}

export default Projects