import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInOut, stagger } from "../animations";
import { Project } from "../types";

type ProjectCardProps = {
  project: Project;
  show: number | null;
  setShow: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProjectCard({
  project,
  show,
  setShow,
}: ProjectCardProps) {
  const { category, description, github_url, image, link, tags, title, id } =
    project;

  return (
    <div>
      <Image
        src={image}
        alt={title}
        className="cursor-pointer"
        width="300"
        height="200"
        quality="100"
        layout="responsive"
        onClick={() => setShow(id)}
      />
      <p className="my-2 text-center dark:text-white">{title}</p>
      {show === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-200 p-2 md:p-5 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInOut}
              className="border-4 border-gray-400 rounded-md"
            >
              <Image
                src={image}
                alt={title}
                width="300"
                height="200"
                quality="100"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInOut}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={link}
                className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{title}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {tags.map((tag, ind) => (
                <motion.span
                  key={ind}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                  variants={fadeInOut}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <button
            onClick={() => setShow(null)}
            className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-500"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
}
