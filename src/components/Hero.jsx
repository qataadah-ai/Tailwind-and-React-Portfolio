import React from "react";
import Navbar from "./Navbar";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Myphoto from "../assets/Myphoto.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden sm:min-h-[600px] flex flex-col items-center">
      {/* Background gradient shape */}
      <div
        className="absolute right-4 md:right-10 top-24 md:top-32 transform rotate-45 z-0 
        h-[280px] md:h-[400px] w-[60%] max-w-[290px] 
        bg-gradient-to-r from-[#6d2987] via-[#8e6cf5] to-[#bb61c5] rounded-3xl"
      ></div>

      <Navbar />

    <main
  id="home"
  className="flex flex-col-reverse md:flex-row 
justify-center md:justify-between items-center 
w-full 
px-[20px] sm:px-[40px] md:px-[100px] 
gap-5 md:gap-20 
pb-6 md:pb-24 pt-20 md:pt-36 mt-10 md:mt-0 z-10"
>
        {/* LEFT SIDE */}
        <section
          className="flex-1 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div
            className="absolute z-10 w-60 h-60
              bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12 "
          ></div>

          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Qazi Qataadah Afridi
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-[#c744ec] mb-3">
              Frontend Developer
            </h2>
          </header>

          {/* Paragraph with controlled width */}
          <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-[480px] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio
            ab libero voluptatem laudantium adipisci similique unde explicabo
            corrupti ea, voluptas ullam. Lorem ipsum dolor sit amet.
          </p>

          {/* Social icons */}
          <div className="flex space-x-5 text-3xl text-white mb-6">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>

          {/* Button */}
          <a href="#" download>
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
              Download Cv
            </button>
          </a>
        </section>

        {/* RIGHT SIDE (IMAGE) */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
        >
         <img
  src={Myphoto}
  alt="hero image"
  className="h-[220px] sm:h-[270px] md:h-[380px] 
w-[220px] sm:w-[270px] md:w-[380px] 
object-cover rounded-full"

/>

        </figure>
      </main>
    </div>
  );
}
