import { type MetaFunction } from '@remix-run/node'
import { z } from "zod"
import { form } from '../components/form.json'
import {Button} from '../components/ui/button.tsx'
import {AlphabeticInput} from '../components/ui/alphabetic.tsx'
import Forms from '../components/ui/form.tsx'
import Sections from '../components/ui/sections.tsx'
import MainLayout from '#app/components/Layouts/MainLayout.tsx'
import { getFormInfo } from '#app/services/formService.ts'
import { p } from '#node_modules/msw/lib/core/GraphQLHandler-ef45ae39.js'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Information' },
		{ name: 'description', content: 'Welcome to PlanES' },
	]
}

export const loader =async () => {
	const formData = getFormInfo()

	return formData.map((form:any)=> ({
		name: form.name,
		email: form.email,
		phone: form.phone,
		age: form.age,
		photo: form.photo,
		radio: form.radio,
		checkbox: form.checkbox,
		select: form.select

	}))
}

export default function formInfo() {
	const loaderData = useLoaderData()
	const {dataForm} = useLoaderData<typeof loader>()
	//Construction of the form. Basically is the same form, but the data is given by the json file
	return (
		<MainLayout
			className="w-full"
			as="main"
			Header={
				<div className="flex w-full flex-col gap-6 text-2xl">
					<span>Fake data</span>
					<span>Test</span>
				</div>
			}
		>
			<div className="relative flex flex-col items-center justify-center w-full">
                
                <div className="grid w-full grid-cols-5 gap-12 mt-5">
					{/* {JSON.stringify(loaderData, null, 2)} */}
					{loaderData.map((formData : any , index : any) => (
						<div className="mt-5 h-5/6 w-auto flex flex-col items-center justify-center rounded-md  px-2.5 py-2.5 text-center shadow-sm shadow-gray-600 dark:bg-gray-900">
							<h1 className="m-5 text-3xl font-bold text-gray-800 dark:text-gray-50">PlanES</h1>

							<div key={index} className="m-5 flex flex-col items-center justify-center text-gray-800 dark:text-gray-50">
								<img className="m-3 rounded-full" src={formData.photo}></img>
								<h3>{formData.name}</h3>
								<h3>{formData.email}</h3>
							</div>
							
							<Button variant={'destructive'} className='w-3/4' asChild>
								delete
							</Button>
						</div>
					))}

                </div>
			</div>
		</MainLayout>
	)
}
