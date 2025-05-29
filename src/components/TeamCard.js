import React from "react"
import { motion } from "framer-motion";

const TeamCard = ({ name, role, bio, image }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 flex flex-col items-center text-center transition hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-300"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-sm text-indigo-500 font-medium mb-1">{role}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{bio}</p>
    </motion.div>
  );
};

export default TeamCard;
