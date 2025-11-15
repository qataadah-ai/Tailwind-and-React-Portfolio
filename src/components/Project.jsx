import React from 'react'
import image1 from '../assets/project1.jpg'
import image2 from '../assets/project2.jpg'
import image3 from '../assets/project3.jpg'     
import image4 from '../assets/project4.jpg'
import image5 from '../assets/project5.jpg'
import image6 from '../assets/project6.jpg' 
const projects=[
    {id:1,image:image1,title:'Project One',description:'This is the first project.'},
    {id:2,image:image2,title:'Project Two',description:'This is the second project.'},
    {id:3,image:image3,title:'Project Three',description:'This is the third project.'},
    {id:4,image:image4,title:'Project One',description:'This is the first project.'},
    {id:5,image:image5,title:'Project Two',description:'This is the second project.'},
    {id:6,image:image6,title:'Project Three',description:'This is the third project.'},
]

const ProjectBox = ({ image, title, description }) => (
  <article className=" bg-gray-800 relative max-w-sm  rounded shadow-lg group overflow-hidden">
            {/* Background Glow */}
      <div
        className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60
                   bg-[#cd3cf5] rounded-full blur-3xl opacity-50 
                   top-5 sm:top-28 left-10"
      ></div>
      <div className='relative
      '>
   <figure className="relative overflow-hidden">
  <img
    src={image}
    alt={title}
    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
  />

  {/* Overlay (soft and transparent, shows image below) */}
  <div
    className="absolute inset-0 flex items-center justify-center 
               bg-black/40 opacity-0 group-hover:opacity-100 
               transition-opacity duration-300 z-10"
  >
    <a
      href="#"
      rel="noopener noreferrer"
      className="z-20"
    >
      <button className="bg-white text-black font-medium py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
        Live Preview
      </button>
    </a>
  </div>
</figure>

    <div className='px-6 py-4'>
    <header>
      <h3 className="text-white font-bold text-xl nb-2">
        {title}
      </h3>
    </header>

    <p className="text-gray-200 text-base sm:text-base ">
      {description}
    </p>
 </div>
    </div>
  </article>
);


function Project() {
    return (
    <section  
    id='projects'
    className='min-h-screen flex flex-col items-center justify-center text-white px-4 relative overflow-hidden'>
   
       {/* Text Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-0 text-center space-y-6"
      >
        <header className="mt-10">
          <h1 className="text-3xl sm:text-4xl font-bold ">
            My     
            <span className="text-[#cd3cf5] mr-1"> Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
           This is the Projects i have done so far.
          </p>
        </header>
      </div>
<section
        data-aos="fade-up"
        data-aos-delay="500"
       className="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
           gap-6 mt-20 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14 "
      >
        {projects.map((project) => (
          <ProjectBox
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </section>
</section>
    )
}

export default Project
