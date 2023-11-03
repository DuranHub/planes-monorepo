import { faker } from '@faker-js/faker'
import { HttpResponse, http, type HttpHandler } from 'msw'

const { json } = HttpResponse

export const handlers: Array<HttpHandler> = [
	http.get(`https://localhost:7777/users`, async () => {
		console.info('🔶 mocking user contents:')

		return json({
			id: faker.string.uuid(),
			name: faker.person.fullName(),
			email: faker.internet.email(),
			created_at: new Date().toISOString(),
		})
	}),
]
