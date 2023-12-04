import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaDumbbell,
  FaUsers,
  FaUtensils,
  FaRunning,
  FaHeartbeat,
  FaUserFriends,
  FaClipboardCheck,
} from "react-icons/fa";

const services = [
  {
    name: "Personalized Workout Plans",
    icon: <FaDumbbell size={24} />,
    description:
      "Tailored workout plans designed to meet individual fitness goals and preferences .",
  },
  {
    name: "Group Fitness Classes",
    icon: <FaUsers size={24} />,
    description:
      "Engaging group classes for various fitness levels, promoting a sense of community and motivation .",
  },
  {
    name: "Nutritional Guidance",
    icon: <FaUtensils size={24} />,
    description:
      "Expert advice on nutrition to complement fitness routines and achieve overall well-being .",
  },
  {
    name: "Functional Training",
    icon: <FaRunning size={24} />,
    description:
      "Specialized training programs focusing on functional movements for improved daily activities .",
  },
  {
    name: "Cardiovascular Exercise",
    icon: <FaHeartbeat size={24} />,
    description:
      "Customized cardio workouts to enhance heart health and endurance .",
  },
  {
    name: "Strength Training",
    icon: <FaUserFriends size={24} />,
    description:
      "Targeted strength training sessions to build muscle and improve overall strength .",
  },
  {
    name: "Flexibility and Mobility",
    icon: <FaClipboardCheck size={24} />,
    description:
      "Incorporating exercises to enhance flexibility and mobility for better range of motion .",
  },
  {
    name: "Fitness Assessments",
    icon: <FaDumbbell size={24} />,
    description:
      "Comprehensive fitness assessments to track progress and set new fitness goals .",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto lg:mt-60">
        <div className="flex flex-col  lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 mb-20">
          <div className="flex-1 h-[600px] mt-20">
            <h2 className="h2 text-accent">Our Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const { name, icon, description } = service;
                return (
                  <motion.div
                    key={index}
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="p-2 hover:bg-primary hover:transition-all duration-500  hover:bg-opacity-60 transition-opacity"
                  >
                    <div className="flex items-center mb-2 text-accent">
                      {icon}
                      <span className="ml-2 font-bold">{name}</span>
                    </div>
                    <p className="font-secondary leading-tight mb-4 text-white">
                      {description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
