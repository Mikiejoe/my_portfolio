import React from "react";

function About() {
  return (
    <div className="h-screen" id="about">
      <div className="grid grid-cols-2">
        <div className="p-8 flex flex-col justify-between">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p className="text-white leading-10 line-clamp-6 space-x-2">
          👋 Hello, I'm Joseph Omondi, a passionate backend developer with a growing interest in frontend web development and mobile application development using Flutter. With a strong foundation in Django, I'm excited to explore new technologies and expand my skill set to create innovative and user-friendly applications.

🌟 As a backend specialist, I've honed my skills in designing and implementing robust, scalable, and secure web applications. I enjoy solving complex problems and optimizing performance to deliver seamless user experiences. My experience in building RESTful APIs has equipped me with a deep understanding of backend architecture and database management.

💻 On my journey into frontend development, I'm immersing myself in the world of HTML, CSS, and JavaScript, exploring frameworks like React and Vue.js to craft beautiful and responsive user interfaces. I believe that mastering both frontend and backend technologies allows me to create cohesive and impactful solutions.

📱 Additionally, I'm delving into mobile application development with Flutter, leveraging its cross-platform capabilities to build native-quality apps for both iOS and Android platforms. I'm fascinated by Flutter's hot reload feature and its potential to streamline the development process, enabling rapid iteration and innovation.

🚀 Outside of coding, I enjoy staying updated with the latest trends in technology, attending tech meetups, and contributing to open-source projects. I'm committed to continuous learning and growth, always seeking new challenges to expand my expertise and make a positive impact in the tech community.
        </p>
        <button className="outline outline-1 w-32 outline-white rounded-full px-8 py-2 hover:outline-secondary hover:text-secondary">My CV</button>
      </div>
      <div>
        <img src="https://avatars.githubusercontent.com/u/99811467?v=4" alt="" />
      </div>
      </div>
    </div>
  );
}

export default About;
