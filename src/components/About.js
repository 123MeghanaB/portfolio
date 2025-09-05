import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Profile Image on Top */}
        <img
          src={`${process.env.PUBLIC_URL}/me.jpeg`}
          alt="Meghana B"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg"
        />

        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Enthusiastic and detail-oriented Computer Science Engineering
          student with strong problem-solving skills, proficient in Java,
          Python, OOP, and Data Structures. Passionate about building scalable
          solutions, data visualization, HR analytics, and web development.
        </p>
        <div className="mt-6">
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </motion.section>
  );
}
