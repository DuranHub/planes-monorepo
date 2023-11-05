import closeWithGrace from 'close-with-grace'
import { passthrough, http } from 'msw'
import { setupServer } from 'msw/node'
import { handlers as resendHandlers } from './resend.ts'
import { handlers as workflowHandlers } from './workflow.ts'

const miscHandlers = [
	process.env.REMIX_DEV_ORIGIN
		? http.post(`${process.env.REMIX_DEV_ORIGIN}ping`, passthrough)
		: null,
].filter(Boolean)

export const server = setupServer(...miscHandlers, ...resendHandlers, ...workflowHandlers)

server.listen({ onUnhandledRequest: 'warn' })

if (process.env.NODE_ENV !== 'test') {
	console.info('🔶 Mock server installed')

	closeWithGrace(() => {
		server.close()
	})
}
