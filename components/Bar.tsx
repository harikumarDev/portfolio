import React from "react";
import { Skill } from "../types";
import { motion } from "framer-motion";

type BarProps = {
  skill: Skill;
};

export default function Bar({ skill: { Icon, name, level } }: BarProps) {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 30,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="text-white my-4 bg-gray-400 rounded-full">
      <motion.div
        className="px-4 flex items-center rounded-full bg-gradient-to-r from-blue-500 to-green-200"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
}
