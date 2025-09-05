import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">Get in touch</h3>
        <p className="mt-2">meghambbs2003@gmail.com • +91 96639 01619</p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/123MeghanaB"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/meghana-b-"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <p className="mt-6 text-sm">
          Or email me directly — I’ll respond quickly!
        </p>

        {/* Contact Form (Formspree) */}
        <form
          action="https://formspree.io/f/your_form_id" // 🔹 Replace with your Formspree endpoint
          method="POST"
          className="mt-8 max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded text-black"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded text-black"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
