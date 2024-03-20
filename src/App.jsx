import { useCallback, useEffect } from "react";
import ReactFlow, {
 
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MarkerType,
  Background,
  
} from "reactflow";
import "reactflow/dist/style.css";
import {getInitialNodes} from "./components/Nodes/Nodes.jsx";
import initialEdges from "./components/Edges/Edges.jsx";
import { CustomNode } from "./components/CustomNode.jsx";

const edgeOptions = {
  animated: true,
  label: "+",
  labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: "#FFCC00", color: "#fff" },
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
  style: { stroke: "#05474d" }
};



const nodeTypes = {
  customNode: CustomNode,
};


const connectionLineStyle = {
  stroke: "black",
  strokeWidth: 2,
  strokeDasharray: "5, 5",
  strokeLinecap: "round",
};

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );
  
  const onElementRemove = useCallback(
    (elementsToRemove) => {
      console.log('elementsToRemove', elementsToRemove)
      const filteredNodes = nodes.filter((node) => !elementsToRemove.find((el) => el.id === node.id));
      const filteredEdges = edges.filter((edge) => !elementsToRemove.find((el) => el.id === edge.id));
      setNodes(filteredNodes);
      setEdges(filteredEdges);
    },
    [nodes, edges, setNodes, setEdges]
  );

  useEffect(() => {
    setNodes(getInitialNodes(onElementRemove));
    setEdges(initialEdges)
  }, [])

  return (
    <div className="w-full h-screen font-semibold font-sans  flex">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={edgeOptions}
        nodeTypes={nodeTypes}
        fitView
        style={{
          backgroundColor: "#D3D2E5",
        }}
        connectionLineStyle={connectionLineStyle}
      >
        <Controls />
        <Background/>
      </ReactFlow>
    </div>
  );
}
