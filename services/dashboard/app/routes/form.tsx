import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Example of form' },
		{ name: 'description', content: 'Welcome to PlanES' },
	]
}

const data = require('../components/form.json')

export default function Form() {
	//Construction of the form. Basically is the same form, but the data is given by the json file
	return (
		<div className="flex-colums flex w-full justify-around text-center ">
			<div className=" mr-5 mt-10 flex h-5/6 w-auto flex-col items-center justify-center rounded-md bg-gray-900 px-2.5 py-2.5 shadow-sm shadow-gray-600 ">
				<h1 className="mt-5 text-3xl font-bold text-white">
					Example of dynamic form
				</h1>
				<form>
					{data.form.sections.map(formData => {
						return (
							<div className="mx-5 my-10">
								<div className="text-2xl font-bold text-white">
									<h1>{formData.section_title}</h1>
									<h1>{formData.description}</h1>
								</div>
								{formData.fields.map(inputData => {
									return (
										<div className="text-2x1 my-5 flex flex-col text-start">
											<label>{inputData.label}</label>
											<input
												type={inputData.html_element}
												name={inputData.name}
												required={inputData.required}
												datatype={inputData.data_type}
												placeholder={inputData.placeholder}
												className="h-8 justify-stretch rounded-md text-center shadow-sm shadow-gray-500"
											/>
										</div>
									)
								})}
								<button className="... mb-5 mt-5 flex h-10 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-violet-950 text-white shadow-sm shadow-gray-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500">
									Send
								</button>
							</div>
						)
					})}
				</form>
			</div>
		</div>
	)
}
