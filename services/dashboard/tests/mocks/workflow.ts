import { faker } from '@faker-js/faker'
import { HttpResponse, http, type HttpHandler } from 'msw'

const { json } = HttpResponse

export const handlers: Array<HttpHandler> = [
	http.get(`https://localhost:7777/workflow`, async () => {
		console.info('🔶 mocking reactflow components:')

        const place_1 = faker.location.city();
        const place_2 = faker.location.city();

		return json({
			"nodes": [
                {
                    "id": "button-1",
                    "data": { 
                        "label": place_1
                    },
                    "position": { "x": 0, "y": 0 },
                    "sourcePosition": "Right",
                    "targetPosition": "Left",
                },
                {
                    "id": "button-2",
                    "data": { 
                        "label": place_2
                    },
                    "position": { "x": 300, "y": 0 },
                    "sourcePosition": "Right",
                    "targetPosition": "Left",
                }
            ],
            "edges": [
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
            ]
		})
	}),
]