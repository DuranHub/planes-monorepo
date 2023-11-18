import { type MetaFunction } from '@remix-run/node'
import {Link} from "@remix-run/react"

export const meta: MetaFunction = () => [{ title: 'PlanEs' }]

export default function Index() {
	
	return (
		<main className="relative flex min-h-screen items-center justify-center">
			<div className="relative">
			<div className='flex items-center justify-center'>
				<Link to="/dashboard" className='bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm py-1.5 px-1.5 my-3.5 mt-5 mb-5 mx-1.5 w-3/4 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ... cursor-pointer'>
					LogIn with Auth0
				</Link>
			</div>
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
						<div className="absolute inset-0">
							<div className="absolute inset-0 bg-[color:rgba(30,23,38,0.5)] mix-blend-multiply" />
						</div>
						<div className="lg:pt-18 relative px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-20">
							
							<h1 className="text-center text-mega font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
								<a
									className="block uppercase text-white drop-shadow-md"
									href="https://www.epicweb.dev/stack"
								>
									<span>Epic Stack</span>
									<svg
										className="mx-auto mt-2"
										xmlns="http://www.w3.org/2000/svg"
										width="120"
										height="120"
										fill="none"
										viewBox="0 0 65 65"
									>
										<path
											fill="currentColor"
											d="M39.445 25.555 37 17.163 65 0 47.821 28l-8.376-2.445Zm-13.89 0L28 17.163 0 0l17.179 28 8.376-2.445Zm13.89 13.89L37 47.837 65 65 47.821 37l-8.376 2.445Zm-13.89 0L28 47.837 0 65l17.179-28 8.376 2.445Z"
										></path>
									</svg>
								</a>
							</h1>
							<p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
								Check the{' '}
								<a
									className="underline"
									href="https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md"
								>
									Getting Started
								</a>{' '}
								guide file for how to get your project off the ground!
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
