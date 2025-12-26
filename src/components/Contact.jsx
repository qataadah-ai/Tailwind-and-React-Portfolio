import React from 'react';

function Contact() {
  return (
    <section
  id="contact"
  className="min-h-screen px-4 pt-24 flex flex-col items-center text-white relative overflow-hidden scroll-mt-24"
>
  {/* Background glow */}
  <div
    aria-hidden="true"
    className="absolute top-24 left-1/2 -translate-x-1/2
               w-48 h-48 sm:w-64 sm:h-64
               bg-[#cd3cf5] rounded-full blur-3xl opacity-40"
  />

  {/* Heading */}
  <h1 className="relative text-3xl sm:text-4xl font-bold mb-12">
    Contact <span className="text-[#cd3cf5]">Me</span>
  </h1>

  {/* Form */}
  <form className="w-full max-w-[800px]  mx-auto space-y-4 relative">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First name"
        required
        className="bg-gray-800 px-4 py-2 rounded-[12px] placeholder-gray-400 focus:ring-2 focus:ring-[#482a50] outline-none"
      />

      <input
        type="text"
        placeholder="Last name"
        required
        className="bg-gray-800 px-4 py-2 rounded-[12px] placeholder-gray-400 focus:ring-2 focus:ring-[#482a50] outline-none"
      />
    </div>

    <input
      type="email"
      placeholder="Email address"
      required
      className="bg-gray-800 w-full px-4 py-2 rounded-[12px] placeholder-gray-400 focus:ring-2 focus:ring-[#482a50] outline-none"
    />

    <textarea
      
      placeholder="Your message"
      required
      className="bg-gray-800 w-full px-4 py-2 rounded-[16px] border-none outline-0 h-[220px] resize-none placeholder-gray-400 focus:ring-2 focus:ring-[#482a50] outline-none"
    />

    <div className="flex justify-center pt-4">
      <button
        type="submit"
        className="border border-white px-6 py-2 rounded-full
                   hover:bg-[#482a50] transition"
      >
        Send Message
      </button>
    </div>
  </form>
</section>

  );
}

export default Contact;