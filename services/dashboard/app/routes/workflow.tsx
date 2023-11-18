import { json, type DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Flow from '../components/workflow/canvas.tsx'
import { Position } from 'reactflow' //For static react-flow

export async function loader({ request }: DataFunctionArgs) {
	const workflow = await fetch('https://localhost:7777/workflow').then(res => res.json())
	return json( workflow )
}

const WorkFlow = () => {
    const data = useLoaderData<typeof loader>()

    return (
        <div>
            <p>Mock Server Workflow Testing</p>
            {data && data.workflow && <p> {data.workflow.edges[0].data.sourceLabel} TO {data.workflow.edges[0].data.targetLabel}</p>}
            
            <Flow
                initialNodes={[ 
                    { 
                        "id": "button-1", 
                        "data": { "label": "Lugar 1" }, 
                        "position": { "x": 0, "y": 0 }, 
                        "sourcePosition": Position.Right, 
                        "targetPosition": Position.Left 
                    }, 
                    { 
                        "id": "button-2", 
                        "data": { "label": "Lugar 2" }, 
                        "position": { "x": 300, "y": 0 }, 
                        "sourcePosition": Position.Right, 
                        "targetPosition": Position.Left 
                    } 
                ]}
                initialEdges={[ 
                    { 
                        "id": "edge-button", 
                        "source": "button-1", 
                        "target": "button-2", 
                        "type": "buttonedge", 
                        "data": { 
                            "sourceLabel": "Lugar 1", 
                            "targetLabel": "Lugar 2" 
                        } 
                    } 
                ]}
            />
        </div>
    );
};

export default WorkFlow;
