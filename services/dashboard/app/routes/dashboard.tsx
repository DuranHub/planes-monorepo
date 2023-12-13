import { useLoaderData } from '@remix-run/react'
import { getAuthenticatedUser } from '../services/auth.server.ts'
import { type MetaFunction } from '@remix-run/node'
import { LoaderFunctionArgs } from '@remix-run/node'
import { Link } from '@remix-run/react'
import MainLayout from '#app/components/Layouts/MainLayout.tsx'

export const meta: MetaFunction = () => {
	return [
		{ title: 'PlanEs' },
		{ name: 'description', content: 'Welcome to PlanES' },
	]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	//We wait for the login, if the user are authenticated or not
	const user = await getAuthenticatedUser(request)
	//We get the only parameters that we need
	const { email, name, picture } = user

	return { email, name, picture }
}

export default function Dashboard() {
	//Get the data of user from loader
	const { email, name, picture } = useLoaderData<typeof loader>()

	return (
		<MainLayout
			className="w-full"
			as="main"
			Header={
				<div className="flex w-full flex-col gap-8 text-3xl">
					<span>Dashboard</span>
					<span>settings</span>
				</div>
			}
		>
			<div className="mr-5 mt-10 flex h-5/6 w-auto flex-col items-center justify-center rounded-md bg-gray-900 px-2.5 py-2.5 text-center shadow-sm shadow-gray-600">
				<h1 className="m-5 text-3xl font-bold">PlanES</h1>

				<div className="m-5 flex flex-col items-center justify-center ">
					{/* Show the data */}
					<img className="m-3 rounded-full" src={picture}></img>
					<h2>{name}</h2>
					<h2>{email}</h2>
				</div>
				{/* Button or link to logout */}
				<Link
					to="/logout"
					className="... m-5 w-3/4 rounded-md bg-violet-950 px-1.5 py-1.5 text-white shadow-sm shadow-gray-500 transition delay-150 duration-300 ease-in-out hover:bg-red-500"
				>
					Logout
				</Link>
			</div>
		</MainLayout>
	)
}
