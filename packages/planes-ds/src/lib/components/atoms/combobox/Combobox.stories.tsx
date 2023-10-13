import React from 'react';
import { Combobox } from './index';

export default {
    title: "Combobox",
    component: Combobox
}

//Arguments for Combobox
const Template = args => <Combobox {...args} />

//Combobox for storybook
export const Default = Template.bind({})
Default.args = {
    
}
