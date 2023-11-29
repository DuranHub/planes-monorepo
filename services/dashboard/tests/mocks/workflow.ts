import { faker } from '@faker-js/faker'
import { HttpResponse, http, type HttpHandler} from 'msw'
import {
	makeTimings,
	time,
} from '#app/utils/timing.server.ts'

import { Position, MarkerType } from 'reactflow';

const { json } = HttpResponse

export const handlers: Array<HttpHandler> = [
    http.get(`https://localhost:7777/workflow`, async () => { 
        console.info('🔶 mocking reactflow components:')
        const timings = makeTimings('workflow loader') //setting up timings

        const place_1 = faker.location.city()
        const place_2 = faker.location.city()

        // Time functions
        const nodes = await time(
            () => [
                {
                    "id": "start",
                    "type": 'startnode',
                    "position": { "x": 0, "y": 0 },
                },
                
                {
                    "id": "button-1",
                    "data": { 
                        "label": place_1
                    },
                    "position": { "x": 70, "y": 0 },
                    "sourcePosition": Position.Right,
                    "targetPosition": Position.Left,
                },
                {
                    "id": "button-2",
                    "data": { 
                        "label": place_2
                    },
                    "position": { "x": 370, "y": 0 },
                    "sourcePosition": Position.Right,
                    "targetPosition": Position.Left,
                },
                {
                    "id": "end",
                    "type": 'endnode',
                    "position": { "x": 550, "y": 0 },
                },
            ],
            { timings, type: 'generate nodes' },
        )

        const edges = await time(
            () => [
                {
                    "id": "startEdge",
                    "source": "start",
                    "target": "button-1",
                    "markerEnd": {
                        "type": MarkerType.Arrow,
                    },
                },
                {
                    "id": "edge-button",
                    "source": "button-1",
                    "target": "button-2",
                    "type": "buttonedge",
                    "data": { 
                        "sourceLabel": place_1,
                        "targetLabel": place_2,
                    }
                },
                {
                    "id": "endEdge",
                    "source": "button-2",
                    "target": "end",
                    "markerEnd": {
                        "type": MarkerType.Arrow,
                    },
                },
            ],
            { timings, type: 'generate edges' },
        )

        console.log(timings)

        return json(
            { nodes, edges },
            { headers: { 'Server-Timing': timings.toString() } } //Create headers
        )
    })
]