import React from "react";

const Chapter = ({ title, text, image, reverse }) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 my-16`}
    >
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Chapter;
