import React from "react";
import { motion } from "framer-motion";

const HoverElement = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8, y: -150 }}
      animate={{ opacity: 1, scale: 1, y: -210 }}
      transition={{ ease: [0.5, 1, 0.89, 1], type: "spring", stiffness: 200,duration: 0.5 }}
      className="hoverElement p-4 z-[999] rounded-lg w-52 h-40 absolute bg-zinc-800 text-white flex flex-col justify-center items-center shadow-lg shadow-teal-900 translate-x-[90px] -translate-y-[210px] border-[3px] border-[#14B8A5]"
    >
      <motion.div initial={{ opacity: 0, scale: 0.5, y : 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ease: [0.5, 1, 0.89, 1], duration: 0.5 }}>
        <h4>Label Name : {data.data.label}</h4>
        <h4>Label Color : {data.data.color}</h4>
        <h4>X Position: {data.xPos}</h4>
        <h4>Y Position : {data.yPos}</h4>
      </motion.div>
    </motion.div>
  );
};

export default HoverElement;
