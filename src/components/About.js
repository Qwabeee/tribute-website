import React from "react";
import Chapter from "../components/Chapter";

const About = () => {
  const chapters = [
    {
      title: "Chapter One",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      image: "/images/placeholder.jpg",
    },
    {
      title: "Chapter Two",
      text: "Cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. In fermentum posuere urna nec tincidunt.",
      image: "/images/placeholder.jpg",
    },
    {
      title: "Chapter Three",
      text: "Aenean et tortor at risus viverra adipiscing at in tellus integer. Semper auctor neque vitae tempus quam.",
      image: "/images/placeholder.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
          About
        </h2>
        {chapters.map((chapter, index) => (
          <Chapter
            key={index}
            title={chapter.title}
            text={chapter.text}
            image={chapter.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
