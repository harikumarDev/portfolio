import { motion } from "framer-motion";
import React from "react";
import { fadeInOut, routeAnimation } from "../animations";
import Bar from "../components/Bar";
import { skills, tools } from "../data";

export default function resume() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2 dark:text-white"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeInOut} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold text-orange-500">Education</h5>
          <div>
            <h6 className="my-2 text-xl font-bold">
              National Institute of Technology, Nagaland (2019 - Present)
            </h6>
            <p className="my-3">Mechanical Engineering</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInOut} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold text-orange-500">
            Experience
          </h5>
          <div>
            <h6 className="my-2 text-xl font-bold">Software Engineer Intern</h6>
            <p className="my-3">Make Better Life</p>
          </div>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & frameworks</h5>
          <div className="my-2">
            {skills.map((skill, ind) => (
              <Bar skill={skill} key={ind} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & softwares</h5>
          <div className="my-2">
            {tools.map((tool, ind) => (
              <Bar skill={tool} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
