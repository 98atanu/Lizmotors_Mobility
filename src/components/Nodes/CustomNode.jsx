import { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import HoverElement from "../HoverElement";

export const CustomNode = memo(({ id, data, isConnectable }) => {
  
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleOnDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to remove this node?")
    if(confirmDelete){
      data?.onElementRemove(id)
    }
  }

  return (
    <div className={`py-2 px-10 rounded-xl min-w-20 relative group shadow-md shadow-slate-900`} style={{backgroundColor: data?.color || '#000000', }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <Handle
       id="a"
        type="target"
        position={Position.Left}
        className="bg-teal-500 w-3 h-3 "
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
     <div className=" font-bold font-Grotesk ">{data?.label}</div>
     {isHovered && <HoverElement data={data} />}
      <div onClick={handleOnDelete} className="w-6 h-6 absolute -top-3 -right-3 bg-black rounded-full hidden group-hover:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times">
          <path
            fill="#6563FF"
            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
          ></path>
        </svg>
      </div>
      <Handle
       id="b"
        type="source"
        position={Position.Right}
        className="bg-teal-500 w-3 h-3 "
        isConnectable={isConnectable}
      />
    </div>
  );
});
