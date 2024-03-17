import { useEffect, useCallback } from "react";
import ReactFlow, {
  MarkerType,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import initialNodes from "./components/Nodes/Nodes.jsx";
import initialEdges from "./components/Edges/Edges.jsx";
import { ColoredNode } from "./components/colored-node.jsx";

const edgeOptions = {
  animated: true,
  label: "+",
  labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelBgStyle: { fill: "#FFCC00", color: "#fff" },
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
};

const nodeTypes = {
  coloredNode: ColoredNode,
};

const connectionLineStyle = {
  stroke: "black",
  strokeWidth: 2,
  strokeDasharray: "5, 5",
  strokeLinecap: "round",
};

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );

  // useEffect(() => {
  //   setNodes(initialNodes);
  //   setEdges(initialEdges);
  // }, [initialNodes, initialEdges]);

  return (
    <div className="w-full h-screen font-semibold font-sans  flex">
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
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
      </ReactFlow>
    </div>
  );
}
