import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4">Experience & Training</h3>

        <div className="mb-4">
          <h4 className="font-semibold">Web Development Intern — Au Multidimensional Solutions</h4>
          <p className="text-sm text-gray-600">Oct 2024 – Mar 2025</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Developed mini-projects with React.js, WordPress and Wix.</li>
            <li>Performed manual testing and competitor analysis.</li>
            <li>Collaborated on two client websites.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Accenture — Data Analytics & Visualization Job Simulation (Forage)</h4>
          <p className="text-sm text-gray-600">Nov 2024</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Cleaner, modeled and analyzed datasets; prepared slide deck and presentation.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
