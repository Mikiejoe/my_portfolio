import React from "react";

const skills = [
    {
        name: "HTML",
        level: "Advanced",
        logo:"https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
    },
    {
        name: "Django",
        level: "Advanced",
        logo:"https://copyassignment.com/wp-content/uploads/2022/06/Django-logo-474x360-1.jpg"
    },
    {
        name: "React",
        level: "Advanced",
        logo:"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
    },
    {
        name: "Flutter",
        level: "Advanced",
        logo:"https://codenovation.org/images/flutter-interact-card.png"
    },
    {
        name: "Vue",
        logo: "https://w7.pngwing.com/pngs/772/713/png-transparent-vue-js-react-javascript-library-jquery-vue-js-angle-text-logo-thumbnail.png",
    }
]
function Skills() {
  return (
    <div id="skills" className="my-12 text-center">
      <h1 className="text-4xl font-bold">My Skills</h1>
      <p className="text-white/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          beatae eos, suscipit molestiae fugit ab ipsum vitae debitis ex quae
          blanditiis assumenda, sint libero expedita aliquid ducimus labore
          veritatis sapiente.</p>
          <div className="flex justify-evenly">
            {
                skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={skill.logo} alt={skill.name} className="w-24 h-24 object-cover rounded-full"/>
                        <p className="text-2xl font-bold">{skill.name}</p>
                        
                    </div>
                ))
            }
          </div>
    </div>
  );
}

export default Skills;
