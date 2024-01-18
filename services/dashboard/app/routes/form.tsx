import { type MetaFunction } from '@remix-run/node'
import { z } from "zod"
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
									//This is for the construction if we want to do a button
									if (inputData.html_element == 'button' || inputData.html_element == "submit") {
										return (
											<div className='flex flex-col text-start my-2 text-2x1 '>
												<button
													type={inputData.html_element}
													name={inputData.name}
													className='bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm my-2 w-full h-10 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ... cursor-pointer flex flex-col justify-center items-center'
												>{inputData.placeholder}</button>
											</div>
										)
									}
									//Construction of radio button
									if (inputData.html_element == 'radio') {
										return (
											<div className='flex flex-col text-start my-3 text-2x1 text-white'>
												<label className='text-3x1'>{inputData.label}</label>
												{
													inputData.options.map(optionsData => {
														return (
															<label className='text-white'>
																<input
																	type="radio"
																	name={inputData.name}
																	value={optionsData}
																/>{optionsData}
															</label>
														)
													})
												}

											</div>
										)
									}
									//Construction of select input
									if (inputData.html_element == 'select') {
										return (
											<div>
												<label className='text-white' >{inputData.label}</label>
												<select id={inputData.html_element} name={inputData.html_element} className='text-slate-950'>
													{
														inputData.options.map(optionsData => {
															return (
																<option value={optionsData}>{optionsData}</option>
															)
														})
													}
												</select>
											</div>
										)
									}
									if (inputData.html_element == 'checkbox') {
										return (
											<div className='text-white'>
												<label>{inputData.label}</label>
												{
													inputData.options.map(inputValue => {
														return (
															<div className='flex flex-col items-start my-3 text-2x1 text-white'>
																<label>
																	<input type={inputData.html_element} id={inputValue} name={inputValue} />
																	{inputValue}
																</label>
																
															</div>
														)
													})
												}

											</div>
										)
									}
									//Constuction of file input
									if (inputData.html_element == 'file') {
										return (
											<div className='flex flex-col text-start my-5 text-2x1 text-white'>
												<label >{inputData.label}</label>
												<input
													type={inputData.html_element}
													name={inputData.name}
													datatype={inputData.data_type}
													className='shadow-sm shadow-gray-500 rounded-md justify-stretch h-8 text-center'
												/>
											</div>
										)
									}
									//If the the input type is text, the default form is this
									return (
										<div className="text-2x1 my-5 flex flex-col text-start text-slate-950">
											<label className='text-white'>{inputData.label}</label>
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