import {
  Mail,
  Download,
  ArrowRight,
  Github,
  Linkedin
} from "lucide-react";

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
 
  return (
    <section
            id="about"
            className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2 animate-slide-in">Hello! I'm</p>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-in animate-delay-100">
                  Joseph Omondi
                </h1>
                <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 animate-slide-in animate-delay-200">
                  Backend Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg animate-fade-in animate-delay-300">
                  Passionate about creating seamless applications across mobile and
                  web platforms. Specialized in Flutter, Node.js, Django, and React
                  development.
                </p>
                <div className="flex gap-4 animate-fade-in animate-delay-400">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-colors duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Hire Me <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                  target="blank"
                    href="https://drive.google.com/file/d/1m3Xkqqzox8tib4rALxF0NCgM5kYQG1Bi/view?usp=sharing"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-full font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Download CV <Download className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="relative animate-fade-in animate-delay-500">
                <div className="aspect-square rounded-full bg-orange-500 overflow-hidden relative animate-float"> 
                  <img
                    src="https://avatars.githubusercontent.com/u/99811467?v=4"
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-6 py-3 animate-scale-in animate-delay-500">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    FOLLOW ME ON :
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Mikiejoe"
                      className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/joseph-michael-445111235/"
                      className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:omoshjoe02@gmail.com"
                      className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors duration-200 hover:scale-110"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}

export default About;
