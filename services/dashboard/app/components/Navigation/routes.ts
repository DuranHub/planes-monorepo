import { type IconName } from '@/icon-name'

type Route = {
	name: string
	path: string
	icon: IconName
}

export const routes: Route[] = [
	{
		name: 'Home',
		path: '/',
		icon: 'home',
	},
	{
		name: 'Dashboard',
		path: '/dashboard',
        icon: 'file-text',
	},
	{
		name: 'Workflow',
		path: '/workflow',
        icon: 'dots-horizontal',
	},	
	{
		name: 'Form',
		path: '/form2',
        icon: 'dots-horizontal',
	},
	{
		name: 'Form3',
		path: '/form3',
        icon: 'dots-horizontal',
	},
	{
		name: 'Form Info',
		path: '/formInfo',
        icon: 'dots-horizontal',
	},
]
