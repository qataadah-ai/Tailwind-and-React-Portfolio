import React from "react";
import Myphoto from "../assets/Myphoto.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* LEFT SIDE — IMAGE SECTION */}
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          {/* Gradient Shape in Background */}
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px]
        bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5]
        absolute transform rotate-12 z-0 right-5 top-2 md:top-10 rounded-full"
          ></div>

         {/* First Floating Image */}
<img
  src={image1}
  alt="about picture 1"
  className="
    absolute top-6 left-2 sm:top-10 sm:left-10
    md:top-16 md:left-14
    transform -translate-y-6 sm:-translate-y-12
    z-20 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28
    rounded-3xl shadow-lg
  "
/>
         
{/* Main Image */}
<img
  src={Myphoto}
  alt="about picture 2"
  className="
    relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-65 md:h-80
    rounded-lg
  "
/>
{/* Third Floating Image */}
<img
  src={image2}
  alt="about picture 3"
  className="
    absolute bottom-0 right-2 sm:right-6 md:right-10
    transform translate-y-10 sm:translate-y-16
    z-10 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24
    rounded-3xl
  "
/>
        </figure>

        {/* RIGHT SIDE — ABOUT TEXT SECTION */}
        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div
            className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50
    -top-5 left-10"
          ></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            I’m a passionate frontend developer who loves building modern,
            creative, and responsive web applications. My focus is on clean
            design, smooth UI/UX, and bringing ideas to life using React and
            Tailwind CSS.
          </p>
          <footer>
            <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
        hover:bg-[#801b9c] hover:shadow[0_0_40px_rgba(128,0,128,0)] rounded-full text-sm sm:text-lg"
            >
              Learn More
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default About;
