import React from "react";

function About() {
  return (
    <div className="h-screen" id="about">
      <div className="grid grid-cols-2">
        <div className="p-8 flex flex-col justify-between">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p className="text-white leading-10 space-x-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          beatae eos, suscipit molestiae fugit ab ipsum vitae debitis ex quae
          blanditiis assumenda, sint libero expedita aliquid ducimus labore
          veritatis sapiente.<br/><br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, repellendus.
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
