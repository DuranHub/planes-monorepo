import { formatMessages } from "esbuild"

const forms : any = []

export const addFormInfo = (form : any) => {
    forms.push(form)
}

export const getFormInfo = () => {
    return forms
}