import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type ActiveItemType = "About" | "Projects" | "Resume";

type NavItemProps = {
  activeItem: ActiveItemType;
  setActiveItem: Function;
  name: string;
  route: string;
};

const NavItem = ({ activeItem, setActiveItem, name, route }: NavItemProps) => {
  return (
    activeItem !== name && (
      <Link href={route} scroll={false}>
        <a>
          <span
            className="hover:text-purple-800 dark:hover:text-orange-400"
            onClick={() => setActiveItem(name)}
          >
            {name}
          </span>
        </a>
      </Link>
    )
  );
};

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<ActiveItemType>("About");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    else if (pathname === "/projects") setActiveItem("Projects");
    else if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3 dark:text-white">
      <span className="text-blue font-bold text-xl border-b-4 border-green-100 md:text-2xl">
        {activeItem}
      </span>
      <div className="text-lg flex space-x-3">
        <NavItem
          name="About"
          route="/"
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
        <NavItem
          name="Projects"
          route="/projects"
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
        <NavItem
          name="Resume"
          route="/resume"
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
      </div>
    </div>
  );
}
