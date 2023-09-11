import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader = async ({ request }: LoaderArgs) => {
	return { message: 'Hello World' }
}

export default function RouteComponent() {
	const data = useLoaderData<typeof loader>()
	return <div>{data.message}</div>
}
