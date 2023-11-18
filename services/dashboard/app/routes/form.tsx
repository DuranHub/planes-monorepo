import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [
	  { title: "Example of form" },
	  { name: "description", content: "Welcome to PlanES" },
	];
  };

  
  const data = require('../components/form.json')

  export default function Form(){
    //Construction of the form. Basically is the same form, but the data is given by the json file
    return(
        <div className='flex flex-colums justify-around w-full text-center '>
            <div className=' bg-gray-900 mt-10 w-auto flex flex-col justify-center items-center mr-5 h-5/6 rounded-md shadow-gray-600 shadow-sm py-2.5 px-2.5 '>
                <h1 className='text-3xl font-bold text-white mt-5'>Example of dynamic form</h1>
                <form>
                    {
                        data.form.sections.map(formData => {
                            
                            return(
                                <div className='my-10 mx-5'>
                                    <div className='text-2xl font-bold text-white'>
                                        <h1>{formData.section_title}</h1>
                                        <h1>{formData.description}</h1>
                                    </div>
                                    {
                                        formData.fields.map(inputData => {
                                            return(
                                                <div className='flex flex-col text-start my-5 text-2x1'>
                                                    <label>{inputData.label}</label>
                                                    <input 
                                                        type={inputData.html_element} 
                                                        name={inputData.name} 
                                                        required={inputData.required} 
                                                        datatype={inputData.data_type} 
                                                        placeholder={inputData.placeholder}
                                                        className='shadow-sm shadow-gray-500 rounded-md justify-stretch h-8 text-center'
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                    <button className='bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm mt-5 mb-5 w-full h-10 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ... cursor-pointer flex flex-col justify-center items-center'>Send</button>
                                </div>
                            )
                        })
                    }
                    
                </form>
            </div>
        </div>
    )

}