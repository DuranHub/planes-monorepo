import { faker } from '@faker-js/faker'
import { HttpResponse, http, type HttpHandler } from 'msw'

const { json } = HttpResponse

export const handlers: Array<HttpHandler> = [
	http.get(`https://localhost:7777/form`, async () => {
		console.info('🔶 mocking user form contents:')

		return json({
			id: faker.string.uuid(),
			name: faker.person.fullName(),
			email: faker.internet.email(),
			phone: faker.phone.number(),
			age: faker.number.int({ min: 18, max: 99 }),
            photo: faker.image.avatar(),
            radio: faker.number.int({ min: 0, max: 1 }),
            check: faker.number.int({ min: 1, max: 3 }),
			created_at: new Date().toISOString(),
		})
	}),
]