import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center  text-white px-4 relative overflow-hidden pt-24 scroll-mt-24"
    >
      {/* Background Glow - centered under the heading */}
      <div
        className="absolute z-10 left-1/2 top-20 transform -translate-x-1/2
                   w-30 h-30 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full
                   blur-3xl opacity-50"
        aria-hidden="true"
      />

      <h1 className="relative z-10 text-3xl sm:text-4xl font-bold top-10">
        Contact <span className="text-[#cd3cf5] ml-1">Me</span>
      </h1>
   
      <form action="#" className="w-full max-w-2xl mt-15 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="sr-only">First name</span>
            <input
              name="firstName"
              type="text"
              required
              placeholder="First name"
              className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#482a50]"
            />
          </label>

          <label className="flex flex-col">
            <span className="sr-only">Last name</span>
            <input
              name="lastName"
              type="text"
              required
              placeholder="Last name"
              className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#482a50]"
            />
          </label>

          <label className="md:col-span-2 flex flex-col">
            <span className="sr-only">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#482a50]"
            />
          </label>

          <label className="md:col-span-2 flex flex-col">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message"
              className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-md w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#482a50]"
            />
          </label>
        </div>

        <div className="mt-4 flex justify-center ">
          <button
            type="submit"
            className="border-2 border-white text-white hover:bg-[#482a50] font-semibold px-6 py-2 rounded-full shadow "
          >
            Send Message
          </button>
        </div>
      </form>

 
<footer className="h-2 bg-black mt-10 w-full block">
  <div className="container  px-4 h-full flex items-center justify-end">

    <p className="text-center text-white">
      © 2023 Qazi Qataadah Afridi. All rights reserved.
    </p>
  </div>
</footer>

    </section>
 
  );
}

export default Contact;