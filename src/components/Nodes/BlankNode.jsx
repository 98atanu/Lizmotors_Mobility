import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export const BlankNode =  memo(({ data, isConnectable }) => {
  return (
    <>
    <motion.div  whileHover={{ scale: 1.1,  }}
      whileTap={{ scale: 0.9 }} className='font-Grotesk mr-1 shadow-md shadow-slate-900 px-3 py-1 rounded-xl bg-[#ABDA5D] hover:text-white hover:bg-slate-900 hover:border-[2px] hover:border-[#14B8A5]'>
        {data.color}
        </motion.div>
    <Handle
        id="b"
        type="source"
        position={Position.Right}
        className="bg-teal-500 w-3 h-3 "
        isConnectable={isConnectable}
      />
    
  </>
  );
});
