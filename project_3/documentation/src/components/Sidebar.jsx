import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "installation", title: "Installation" },
    { id: "dataset-preparation", title: "Dataset Preparation" },
    { id: "training", title: "Training" },
    { id: "evaluation", title: "Evaluation" },
    { id: "optimization", title: "Optimization" },
    { id: "conclusion", title: "Conclusion" },
  ];

  return (
    <nav className="sidebar">
      <h2>Documentation</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
