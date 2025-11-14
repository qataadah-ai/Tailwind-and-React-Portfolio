import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import reactImage from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import bootsrap from "../assets/bootstrap.svg";


const skilsData = [
  { id: 1, image: html, title: "HTML", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 2, image: css, title: "CSS", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 3, image: bootsrap, title: "Bootstrap", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 4, image: tailwind, title: "Tailwind CSS", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 5, image: js, title: "JavaScript", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 6, image: reactImage, title: "React", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-3 sm:p-4  w-full rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-12 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </article>
);

function Skils() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 
                   bg-[#cd3cf5] rounded-full blur-3xl opacity-50 
                   top-10 sm:top-28 left-1/2 transform -translate-x-1/2"
      ></div>


      {/* Text Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-0 text-center space-y-6"
      >
        <header className="mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold ">
            My Expertise <br /> and{" "}
            <span className="text-[#cd3cf5]">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            I specialize in frontend technologies including HTML, CSS, 
            JavaScript, React, and Tailwind CSS — crafting modern, responsive,
            and visually appealing user interfaces.
          </p>
        </header>
      </div>

      {/* Skills Grid */}
      <section
        data-aos="fade-up"
        data-aos-delay="500"
       className="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
           gap-6 mt-20 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14 "
      >
        {skilsData.map((skill) => (
          <SkillBox
            key={skill.id}
            image={skill.image}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </section>
    </section>
  );
}

export default Skils;
