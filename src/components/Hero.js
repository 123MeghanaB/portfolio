import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center py-24">
        {/* Profile Image with Fade + Scale */}
       

        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Hi, I’m Meghana B
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Computer Science Engineering Student • Web Dev • Data Visualization
        </motion.p>

        {/* Buttons with Staggered Animation */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.a
            href="#projects"
            className="px-5 py-3 bg-white text-indigo-700 rounded-lg font-semibold shadow hover:scale-105 transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            className="px-5 py-3 border border-white rounded-lg hover:bg-white hover:text-indigo-700 transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
