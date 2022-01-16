import React from "react";
import { AllCategories } from "../types";

type ProjectsNavbarProps = {
  handleFilter: (category: AllCategories) => void;
  activeItem: AllCategories;
};

type NavItemProps = {
  value: AllCategories;
  handleFilter: (category: AllCategories) => void;
  activeItem: AllCategories;
};

const NavItem = ({ value, handleFilter, activeItem }: NavItemProps) => {
  let className =
    "cursor-pointer hover:text-purple-400 capitalize dark:text-white dark:hover:text-purple-200";

  if (activeItem === value) {
    className += " text-purple-700 dark:text-blue";
  }

  return (
    <li onClick={() => handleFilter(value)} className={className}>
      {value}
    </li>
  );
};

export default function ProjectsNavbar({
  handleFilter,
  activeItem,
}: ProjectsNavbarProps) {
  const categories: AllCategories[] = [
    "all",
    "react",
    "express",
    "nodejs",
    "mongodb",
    "graphql",
    "typescript",
  ];

  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto">
      {categories.map((catgry, ind) => (
        <NavItem
          key={ind}
          value={catgry}
          handleFilter={handleFilter}
          activeItem={activeItem}
        />
      ))}
    </div>
  );
}
