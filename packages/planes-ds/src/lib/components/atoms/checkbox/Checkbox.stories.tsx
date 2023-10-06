import React from 'react';
import { Checkbox } from './index';

export default {
    title: "Checkbox",
    component: Checkbox
}

//Arguments for Checkbox
const CheckboxArgs = args => <Checkbox {...args} />

//Checkbox for storybook
export const Default = CheckboxArgs.bind({})
Default.args = {
    name: 'Checkbox',
    label: 'Prueba',
}


//Checkbox clicked
export const Clicked = CheckboxArgs.bind({})
Clicked.args = {
    name: 'Checkbox Clicked',
    label: 'Prueba',
    checked: true,
    
}

export const Disabled = CheckboxArgs.bind({})
Disabled.args = {
    name: 'Checkbox Disabled',
    disabled: true,
    
}

