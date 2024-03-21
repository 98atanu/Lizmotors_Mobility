  import React from 'react'
  import { motion } from "framer-motion";


  const HoverElement = ({data}) => {

    return (
      <motion.div  initial={{ opacity: 0.5, scale: 0.8, y: -150 }}
      animate={{ opacity: 1, scale: 1, y: -210 }}
      transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.5 }} className='hoverElement z-[999] rounded-lg w-52 h-40 absolute bg-zinc-800 text-white flex flex-col justify-center items-center shadow-lg shadow-teal-900 translate-x-[90px] -translate-y-[210px]'>
          <h4>Label Name : {data.label}</h4>
          <h4>Label Color : {data.color}</h4>
      </motion.div>
    )
  }

  export default HoverElement