import { motion } from "framer-motion";
import React, { useState } from "react";
import { fadeInOut, routeAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { AllCategories } from "../types";

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [activeItem, setActiveItem] = useState<AllCategories>("all");
  const [show, setShow] = useState<number | null>();

  const handleFilter = (category: AllCategories) => {
    if (category == "all") {
      setProjects(projectsData);
      setActiveItem(category);
      return;
    }
    setProjects(
      projectsData.filter((project) => project.category.includes(category))
    );
    setActiveItem(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      exit="exit"
      animate="animate"
      className="px-5 py-2 overflow-y-auto"
      style={{ height: "77vh" }}
    >
      <ProjectsNavbar handleFilter={handleFilter} activeItem={activeItem} />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-4 my-3 relative"
      >
        {projects.map((proj, ind) => (
          <motion.div
            key={ind}
            variants={fadeInOut}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200"
          >
            <ProjectCard project={proj} show={show} setShow={setShow} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
