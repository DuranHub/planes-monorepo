import { Link } from '@remix-run/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar.tsx'

interface Props {
	user: {
		email: string
		name: string
		picture: string
	}
}

export default function Header({ user }: Props) {
	return (
		<header className="container py-6">
			<nav>
				<div className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
					<Link to="/">
						<div className="font-light">epic</div>
						<div className="font-bold">notes</div>
					</Link>
					<Avatar>
						<AvatarImage src={user.picture} alt={user.name} />
						<AvatarFallback>{user.name[0]}</AvatarFallback>
					</Avatar>
				</div>
			</nav>
		</header>
	)
}
