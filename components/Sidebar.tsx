import React from "react";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={
          "https://images.unsplash.com/photo-1642113857988-9ffbc9685305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
        alt="avatar"
        width="300rem"
        height="300rem"
        layout="responsive"
        quality="100"
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan dark:text-white">
        <span className="text-purple-700">Hari</span> kumar
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 dark:text-white rounded-full">
        Full stack Web Dev
      </p>
      <a
        href="#"
        download="Hari_Resume.pdf"
        className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 dark:text-white rounded-full flex items-center justify-center"
      >
        <AiOutlinePaperClip className="w-4 h-4" /> Download Resume
      </a>
      <div className="flex justify-around my-5 w-9/12 md:w-full mx-auto">
        <a
          href="https://github.com/harikumarDev"
          className="dark:text-white"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/hari-kumar-450b6a192/"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div
        className="my-5 py-4 bg-gray-200 dark:bg-dark-200 dark:text-white"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Hyderabad, India</span>
        </div>
        <p className="my-2">hari70319@gmail.com</p>
        <p className="my-2">9390380057</p>
      </div>
      <button
        className="bg-gradient-to-r from-pink to-blue w-8/12 rounded-full py-2 px-5 my-2 focus:outline-none"
        onClick={() => window.open("mailto:hari70319@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="bg-gradient-to-r from-pink to-blue w-8/12 rounded-full py-2 px-5 my-2"
      >
        Toggle Theme
      </button>
    </div>
  );
}
