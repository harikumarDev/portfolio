import { IconType } from "react-icons";

export type Service = {
  title: string;
  about: string;
  Icon: IconType;
};

export type Skill = {
  name: string;
  level: string;
  Icon: IconType;
};

export type Category =
  | "react"
  | "express"
  | "nodejs"
  | "mongodb"
  | "graphql"
  | "typescript";

export type AllCategories = Category | "all";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github_url: string;
  category: Category[];
  tags: string[];
};
