import { useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  updateEdge,
  Controls,
  MarkerType,
  Background,
  
} from "reactflow";
import "reactflow/dist/style.css";
import { getInitialNodes } from "./components/Nodes/Nodes.jsx";
import initialEdges from "./components/Edges/Edges.jsx";
import { CustomNode } from "./components/Nodes/CustomNode.jsx";

const edgeOptions = {
  animated: true,
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
  style: { stroke: "#05474d" },
};

const nodeTypes = {
  customNode: CustomNode,
};

const connectionLineStyle = {
  stroke: "#05474d",
  strokeWidth: 3,
  strokeDasharray: "5, 5",
  strokeLinecap: "round",
};

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
            style: { stroke: "#05474d" },
          },
          eds
        )
      ),
    []
  );

  const onEdgeUpdate = useCallback(
    (edge, newConnection) => setEdges((els) => updateEdge(edge, newConnection, els)),
    []);

  useEffect(() => {
    setNodes(getInitialNodes(onElementRemove));
    setEdges(initialEdges);
  }, []);

  const onElementRemove = useCallback((elementsToRemove) => {
    console.log("elements to delete", elementsToRemove);
    setNodes((prevNodes) =>
      prevNodes.filter((node) => node.id !== elementsToRemove)
    );
  });

  const addNode = useCallback(
    (label, position, color) => {
      setNodes((prevNodes) => {
        const newNode = {
          id: uuidv4(),
          type: "customNode",
          sourcePosition: "right",
          targetPosition: "left",
          data: { label, color, onElementRemove },
          position,
        };
        console.log("prevNode", prevNodes);
        console.log("newNode", newNode);
        return [...prevNodes, newNode];
      });
    },
    []
  );

  const handleNodeDoubleClick = useCallback(
    (event, node) => {
      const nodeName = window.prompt("Enter node name:");
      if (nodeName !== null && nodeName.trim() !== "") {
        const newPosition = {
          x: node.position.x + 100,
          y: node.position.y + 100,
        };
        const newColor = node.data.color;
        addNode(nodeName, newPosition, newColor);
      }
    },
    [addNode]
  );

  return (
    <div className="w-full h-screen font-semibold font-sans  flex">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        defaultNodes={nodes}
        defaultEdges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={edgeOptions}
        nodeTypes={nodeTypes}
        onNodeDoubleClick={handleNodeDoubleClick}
        onEdgeUpdate={onEdgeUpdate}
        fitView
        style={{
          backgroundColor: "#D3D2E5",
          width: "100%",
          height: "100%",
        }}
        connectionLineStyle={connectionLineStyle}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
