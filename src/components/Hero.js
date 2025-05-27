import React from "react";
import "../styles/Typewriter.css";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/ezikamjebhula.jpg')",
      }}
      id="hero"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 px-4 max-w-3xl text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold typewriter mb-4">
          Ezikamjebhula
        </h1>
        <p className="text-lg md:text-2xl opacity-0 animate-fade-in">
          yet to write the paragraph.
        </p>
      </div>
    </section>
  );
};

export default Hero;
