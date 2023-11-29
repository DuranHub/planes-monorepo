import { json, type DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Flow from '../components/workflow/canvas.tsx'

export async function loader({ request }: DataFunctionArgs) {
	const workflow = await fetch('https://localhost:7777/workflow').then(res => res.json())
	return json( workflow )
}

const WorkFlow = () => {
    const data = useLoaderData<typeof loader>()

    return (
        <div>
            <p>Mock Server Workflow Testing</p>
            <Flow
                initialNodes={data.workflow.nodes}
                initialEdges={data.workflow.edges}
            />
        </div>
    );
};

export default WorkFlow;
