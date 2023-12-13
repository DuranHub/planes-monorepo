import { Link } from '@remix-run/react'
import ThemeSwitch from '../ThemeSwitch.tsx'
import { Icon } from '../ui/icons/icon.tsx'
import { routes } from './routes.ts'

type Props = {
	requestInfo: any
}

export default function Sidebar({ requestInfo }: Props) {
	return (
		<aside className="flex flex-col items-center justify-center">
			<ul className="flex flex-col gap-4">
				{routes.map(route => (
					<li key={route.path} className="flex items-center gap-4">
						<Icon name={route.icon} className="h-6 w-6" />
						<Link
							key={route.path}
							to={route.path}
							className="text-2xl font-bold text-gray-800"
						>
							{route.name}
						</Link>
					</li>
				))}
			</ul>
			<ThemeSwitch
				className="mt-auto"
				userPreference={requestInfo.userPrefs.theme}
			/>
		</aside>
	)
}
