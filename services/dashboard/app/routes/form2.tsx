import { type MetaFunction } from '@remix-run/node'
import { z } from "zod"
import { form } from '../components/form.json'
import {Button} from '../components/ui/button.tsx'
import {AlphabeticInput} from '../components/ui/alphabetic.tsx'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Example of form' },
		{ name: 'description', content: 'Welcome to PlanES' },
	]
}

type Props = {
    requestInfo: any
}

export default function Form({ requestInfo }: Props) {
	//Construction of the form. Basically is the same form, but the data is given by the json file
	return (
		<div className="flex-colums flex h-auto w-full justify-around text-center ">
			<div className=" mr-5 mt-10 flex h-auto w-auto flex-col items-center justify-center rounded-md bg-white px-2.5 py-2.5 shadow-sm shadow-gray-800 dark:bg-slate-900 ">
				<h1 className="mt-5 text-3xl font-bold text-gray-800 dark:text-gray-50">
					Example of dynamic form
				</h1>
				<form>
					{form.sections.map(formData => {
						return (
							<div className="mx-5 my-10">
								<div className="text-2xl font-bold text-gray-800 dark:text-gray-50">
									<h1>{formData.section_title}</h1>
									<h1>{formData.description}</h1>
								</div>
								{formData.fields.map(inputData => {
									//This is for the construction if we want to do a button
									if (inputData.html_element == 'button' || inputData.html_element == "submit") {
										return (
											<div className='flex flex-col text-start my-2 text-2x1 '>
												<Button 
													type={inputData.html_element}
													name={inputData.name}
													className='my-5 w-full'
													>
														{inputData.placeholder}
												</Button>
											</div>
										)
									}
									//Construction of radio button
									if (inputData.html_element == 'radio') {
										return (
											<div className='flex flex-col text-start my-3 text-2x1 text-gray-800 dark:text-gray-50'>
												<label className='flex items-start gap-4 text-3x1'>{inputData.label}</label>
												{
                                                    
													inputData.options?.map(optionsData => {
														return (
															<label className='text-gray-800 dark:text-gray-50'>
																<input
																	type="radio"
																	name={inputData.name}
																	value={optionsData}
                                                                    className='w-8'
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
												<label className='text-gray-800 dark:text-gray-50' >{inputData.label}</label>
												<select id={inputData.html_element} name={inputData.html_element} className='text-slate-950'>
													{
														inputData.options?.map(optionsData => {
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
											<div className='text-gray-800 dark:text-gray-50'>
												<label>{inputData.label}</label>
												{
													inputData.options?.map(inputValue => {
														return (
															<div className='flex flex-col items-start my-3 text-2x1 text-gray-800 dark:text-gray-50'>
																<label>
																	<input type={inputData.html_element} id={inputValue} name={inputValue} className='w-8'/>
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
											<div className='flex flex-col text-start my-5 text-2x1 text-gray-800 dark:text-white'>
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
										<div className="text-2x1 my-5 flex flex-col text-start text-gray-800">
											<label className='text-gray-800 dark:text-white'>{inputData.label}</label>
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
								<div className='flex flex-row justify-between mt-2.5'>
									<Button variant={'link'}>Cancel</Button>
									<Button size={'lg'} type='submit'>Send</Button>
								</div>
								
							</div>
						)
					})}
				</form>
			</div>
		</div>
	)
}
