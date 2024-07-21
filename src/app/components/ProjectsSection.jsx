"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Surgical Smoke Detection",
    description: "A deep learning model to detect smoke and non-smoke frames during surgical process.",
    image: "/images/surgical-smoke.jpg",
    gitUrl: "https://github.com/Anvesha-Singh/Strykathon_PS2/tree/main",
  },
  {
    id: 2,
    title: "Contactless Thermometer",
    description: "A contactless thermometer using an Arduino and an MLX sensor (like the MLX90614 or MLX90632)",
    image: "/images/therm.png",
    gitUrl: "https://github.com/Anvesha-Singh/ContactlessThermometer",
  },
  {
    id: 3,
    title: "CaseFlowPro",
    description: "A web-app that can be used by Judges to organise their workflow implementing DCM.",
    image: "/images/law.jpg",
    gitUrl: "https://github.com/Anvesha-Singh/CaseFlowPro_beta",
  },
  {
    id: 4,
    title: "VIT Achievements Page",
    description: "A website for displaying the achievements made by VIT students and faculty.",
    image: "/images/bhag.png",
    gitUrl: "https://github.com/Anvesha-Singh/Bhagwan-Bharose",
  },
  {
    id: 5,
    title: "Nonograms",
    description: "A bot that can solve Nonograms on its own given the blank spaces and clues.",
    image: "/images/nono.png",
    gitUrl: "https://github.com/Anvesha-Singh/Nonograms",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className=" text-4xl font-bold text-pink-600 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
