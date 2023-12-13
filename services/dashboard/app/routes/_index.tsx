import { isRouteErrorResponse, useRouteError } from '@remix-run/react'
import { type MetaFunction } from '@remix-run/node'
import MainLayout from '#app/components/Layouts/MainLayout.tsx'

export const meta: MetaFunction = () => [{ title: 'PlanEs' }]

export const loader = async () => {
	return null
}

export default function Index() {
	return (
		<MainLayout className="w-full" as="main" Header={<div>Header</div>}>
			<div className="grid w-full grid-cols-3 gap-12">
				<div>Card 1</div>
				<div>Card 2</div>
				<div>Card 3</div>
				<div>Card 4</div>
				<div>Card 5</div>
				<div>Card 6</div>
			</div>
		</MainLayout>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	if (isRouteErrorResponse(error)) {
		return <div>{error.status}</div>
	}
	return <div>Something went wrong</div>
}
