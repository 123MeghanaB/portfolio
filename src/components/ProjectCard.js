import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  return (
    <motion.div
      className="border rounded-lg p-5 shadow-sm bg-white hover:shadow-lg transition"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="font-bold text-lg">{p.title}</h4>
      <p className="text-gray-600 mt-2">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 border rounded bg-gray-50"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 flex gap-3">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {p.live && p.live !== "#" && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
