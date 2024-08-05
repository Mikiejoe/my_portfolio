import React from "react";

function About() {
  return (
    <div id="about" className="md:p-16 p-4 bg-primary-bg space-y-4 text-white">
      <div className="flex space-x-2">
        <div className="w-2 bg-secondary "></div>
        <h1 className="text-4xl font-bold">About</h1>
      </div>
      <div className="lg:grid flex flex-col-reverse grid-cols-2 md:gap-16 gap-4 items-center justify-center">
        <p className="md:text-xl text-gray-300">
          Hello! I'm Joseph Omondi, an enthusiastic Information Technology
          student at Masinde Muliro University of Science and Technology
          (MMUST), with a keen interest in becoming a great Backend Developer. I
          thrive on solving complex problems and building efficient, scalable
          systems. Throughout my academic journey and practical experiences,
          I've cultivated a deep understanding of various IT domains, including
          network design and management, as well as hands-on experience in
          developing web applications. I'm particularly passionate about
          crafting robust backend systems, ensuring smooth user experiences, and
          leveraging the latest technologies to drive innovation. <br/> During my industrial attachment at the
          County Assembly of Nakuru, I honed my skills in IT support and
          maintenance strategies, contributing to the efficient operation of IT
          systems and networks. When I'm not coding, you'll find me engrossed in
          drama series, drawing inspiration from compelling stories and
          characters. I believe that every line of code tells a story, and I aim
          to write code that speaks of quality, reliability, and innovation. I'm
          always eager to learn, collaborate, and contribute to projects that
          challenge me to grow as a developer and a professional. Let's connect
          and explore how we can build something amazing together!
        </p>
        <div className="">
          <img
            src="https://avatars.githubusercontent.com/u/99811467?v=4"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
