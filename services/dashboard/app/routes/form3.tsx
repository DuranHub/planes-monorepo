import { ActionFunction, type MetaFunction } from '@remix-run/node'
import { form } from '../components/form.json'
import {Button} from '../components/ui/button.tsx'
import Forms from '../components/ui/form.tsx'
import Sections from '../components/ui/sections.tsx'
import MainLayout from '#app/components/Layouts/MainLayout.tsx'
import { json, type DataFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { getFormInfo , addFormInfo } from '#app/services/formService.ts'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Example of form' },
		{ name: 'description', content: 'Welcome to PlanES' },
	]
}

type Props = {
    requestInfo: any
}
export const action: ActionFunction = async ({ request }) => {
	// const data = await request.json()
	// console.log(data)
	// const formInfo = await addFormInfo(data)
	// console.log(formInfo)
	// return json(formInfo)
	const formData = await request.formData()
	const id = formData.get("id")?.toString()
	const name = formData.get('name')
	const email = formData.get('email')
	const phone = formData.get('phone')
	const age = formData.get('age')
	const photo = formData.get('photo')
	const radio = formData.get('radio')
	const checkbox = formData.get('checkbox')
	const select = formData.get('select')
	console.log("Server data: ")
	console.log(name)
	console.log(email)
	console.log(phone)
	console.log(age)
	console.log(photo)
	console.log(radio)
	console.log(checkbox)
	console.log(select)

	if(Number(id) === 0) {
		return {
			error: "Invalid"
		}
  	}

	const responseData = {
		id: id,
    	name: name,
  		email: email,
		phone: phone,
		age: age,
		photo: photo,
		radio: radio,
		checkbox: checkbox,
		select: select
 	}

  	addFormInfo(responseData)

	if(!name || !email || !phone || !age || !photo || !radio || !checkbox || !select){
		return new Response('Missing data', {status: 400})
	}	
	
}
//Mock and faker data generator
export async function loader({ request }: DataFunctionArgs) {
  	const fakeData = await fetch('https://localhost:7777/form').then(res =>
  		res.json(),
  	)
  	return json(fakeData)
}

export default function Form({ requestInfo }: Props) {
	const [formData, setFormData] = useState<any>(null)

	const data = useLoaderData<typeof loader>()
	function setData(data: any){
	
		if(!data){
			return <div className=''>Error loading data</div>
		}
		setFormData(data)
		console.log(formData)
	}
	//Construction of the form. Basically is the same form, but the data is given by the json file
	return (
		<MainLayout
			className="w-full"
			as="main"
			Header={
				<div className="flex w-full flex-col gap-6 text-2xl">
					<span>Form test</span>
					<span>Join us</span>
				</div>
			}
		>
			<div className="flex flex-colums h-auto w-full justify-around text-center">
				<div className='flex flex-col gap-8 mt-10'>
					<span>Generate fake data for testing</span>
					<Button size={'lg'} onClick={() => setData(data)}>Generate</Button>
				</div>
				<Forms className=''>
					<Sections fields={form} dataForm={formData}></Sections>
				</Forms>
			</div>
		</MainLayout>
	)
}




function deleteForm(){

}