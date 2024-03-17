import { useCallback, memo } from "react";
import { Handle, Position } from "reactflow";

export const ColoredNode = memo(({ data, isConnectable }) => {
  return (
    <div className="py-4 px-10 bg-red-100 rounded-md min-w-20 relative group">
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <>{data.label}</>
      <div className="w-6 h-6 absolute -top-3 -right-3 bg-black rounded-full hidden group-hover:block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="times">
          <path
            fill="#6563FF"
            d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
          ></path>
        </svg>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
    </div>
  );
});
