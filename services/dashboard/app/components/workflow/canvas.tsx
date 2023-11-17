import ReactFlow, {
    useNodesState,
    useEdgesState,
    Controls,
    Background,
    Node,
    Edge,
    Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import ButtonEdge from './buttonedge.tsx';
import { ClientOnly } from 'remix-utils/client-only'

interface FlowProps {
    initialNodes: Node[];
    initialEdges: Edge[];
}

//Custom Button Edge type
const edgeTypes = {
    buttonedge: ButtonEdge,
};

//Main component definition
const Flow: React.FC<FlowProps> = ({ initialNodes, initialEdges }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <ClientOnly>
            {() => {
                const height = window.innerHeight-250;
                const width = window.innerWidth;

                return (
                    <div style={{ height: height, width: width }}>
                        <ReactFlow 
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            snapToGrid={true}
                            edgeTypes={edgeTypes}
                            fitView
                            attributionPosition="top-right"
                        >
                            <Background />
                            <Controls />
                        </ReactFlow>
                    </div>
                );
            }}
        </ClientOnly>
    );
}

export default Flow;