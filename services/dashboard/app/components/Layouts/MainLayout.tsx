import { cn } from '#app/utils/misc.tsx'

interface Props {
	children: React.ReactNode
	Header: React.ReactNode
	as: 'div' | 'main' | 'section'
	className?: string
}

export default function MainLayout({ children, Header, as, className }: Props) {
	const Component = as
	return (
		<Component
			className={cn(
				'relative flex flex-col items-center justify-center',
				className,
			)}
		>
			{Header}
			{children}
		</Component>
	)
}
