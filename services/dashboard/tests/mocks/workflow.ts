import { faker } from '@faker-js/faker'
import { HttpResponse, http, type HttpHandler} from 'msw'
import {
	makeTimings,
	time,
  combineServerTimings,
} from '#app/utils/timing.server.ts'

import { Position } from 'reactflow';

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
                    "id": "button-1",
                    "data": { 
                        "label": place_1
                    },
                    "position": { "x": 0, "y": 0 },
                    "sourcePosition": Position.Right,
                    "targetPosition": Position.Left,
                },
                {
                    "id": "button-2",
                    "data": { 
                        "label": place_2
                    },
                    "position": { "x": 300, "y": 0 },
                    "sourcePosition": Position.Right,
                    "targetPosition": Position.Left,
                }
            ],
            { timings, type: 'generate nodes' },
        )

        const edges = await time(
            () => [
                {
                    "id": "edge-button",
                    "source": "button-1",
                    "target": "button-2",
                    "type": "buttonedge",
                    "data": { 
                        "sourceLabel": place_1,
                        "targetLabel": place_2,
                    }
                }
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