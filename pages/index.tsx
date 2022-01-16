import { motion } from "framer-motion";
import { fadeInOut, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

export default function Home() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col px-6 pt-1 flex-grow"
    >
      <h5 className="my-3 font-medium dark:text-white">
        Having 1+ years of experience in Full Stack Web Development, can
        confidently create a highly scalable backend design with good frontend
        design. Can manage a good amount of infrastructure on AWS.
      </h5>
      <div
        className="flex flex-col justify-center p-4 mt-5 bg-gray-400 dark:bg-dark-700 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 font-bold tracking-wide dark:text-white">
          What I Offer
        </h4>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-6"
        >
          {services.map((service: Service, ind) => (
            <motion.div
              variants={fadeInOut}
              key={ind}
              className="lg:col-span-1 bg-gray-200 rounded-lg"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
