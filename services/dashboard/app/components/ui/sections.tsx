import { AlphabeticInput } from './alphabetic.tsx';
import {Button} from './button.tsx'


type Section = {
    section_title: string;
    description: string;
    fields: Field[];
}

type Field = {
    html_element: string;
    name: string;
    label: string;
    data_type : any;
    required: any;
    placeholder: string;
    options: Options[];
}

type Options = {
    options : string;
}

const HeaderForm = ({title , description} : {title : string, description : string}) => {
    return(
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-50">
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default function Sections({ fields , dataForm}: { fields: any , dataForm: any}) {

    return (
        <div>
            
            {fields.sections.map((formData : Section) => {
                return (
                    <div key={formData.section_title} className="mx-5 my-10">
                        <HeaderForm title={formData.section_title} description={formData.description}/>
                        
                        {formData.fields.map((inputData : Field) => {
                            //This is for the construction if we want to do a button
                            if (inputData.html_element == 'button' || inputData.html_element == "submit") {
                                return (
                                    <div key={inputData.name} className='flex flex-col text-start my-2 text-2x1 '>
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
                                    <div key={inputData.name} className='flex flex-col text-start my-3 text-2x1 text-gray-800 dark:text-gray-50'>
                                        <label className='flex items-start gap-4 text-3x1'>{inputData.label}</label>
                                        {
                                            inputData.options?.map((optionsData: any) => {
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
                                    <div key={inputData.name}>
                                        <label className='text-gray-800 dark:text-gray-50' >{inputData.label}</label>
                                        <select id={inputData.html_element} name={inputData.html_element} className='text-slate-950'>
                                            {
                                                inputData.options?.map((optionsData : any) => {
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
                                    <div key={inputData.name} className='text-gray-800 dark:text-gray-50'>
                                        <label>{inputData.label}</label>
                                        {
                                            inputData.options?.map((inputValue : any) => {
                                                return (
                                                    <div className='flex flex-col items-start my-3 text-2x1 text-gray-800 dark:text-gray-50'>
                                                        <label>
                                                            <input type={inputData.html_element} id={inputValue} name={inputValue} className='w-8' />
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
                                    <div key={inputData.name} className='flex flex-col text-start my-5 text-2x1 text-gray-800 dark:text-white'>
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
                                <div key={inputData.name} className="text-2x1 my-5 flex flex-col text-start text-gray-800">
                                    <label className='text-gray-800 dark:text-white'>{inputData.label}</label>
                                    <AlphabeticInput 
                                        type={inputData.html_element}
                                        name={inputData.name}
                                        isRequired={inputData.required}
                                        datatype={inputData.data_type}
                                        placeholder={inputData.placeholder}
                                        defaultValue={'defaultValue'}
                                        >
                                    </AlphabeticInput>
                                </div>
                            )
                        })}
                        <div key={'buttonSection'} className='flex flex-row justify-between mt-2.5'>
                            <Button variant={'link'}>Cancel</Button>
                            <Button size={'lg'} type='submit'>Send</Button>
                        </div>

                    </div>
                )
            })}
        </div>
    )

}