import { motion } from "framer-motion";
import React from "react";
import { Service } from "../types";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({
  service: { Icon, title, about },
}: ServiceCardProps) {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="p-2 flex items-center space-x-4 h-36 dark:bg-dark-300 dark:text-white">
      <Icon className="w-12 h-12 text-green-600" />
      <div>
        <h5 className="font-bold">{title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}
