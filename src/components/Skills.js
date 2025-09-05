import React from "react";

const skills = [
  "C", "Java", "Python", "PHP", "OOP", "Data Structures", "Power BI",
  "Tableau", "MySQL", "Excel", "HTML", "CSS", "React.js", "WordPress", "Wix"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-3 py-2 bg-white border rounded text-sm shadow-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
