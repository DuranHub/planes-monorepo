import React from 'react';
import { Input } from './index';
import ComponentResolver from './componentResolver';

export default {
    title: "Input",
    component: Input,
    argTypes: {
        inputType: { //Combobox for selecting input types
            type: 'select',
            options: ['text', 'alphabetic']
        }
    }
}

const Template = (args) => <ComponentResolver {...args} />; //Arguments for component resolver

export const Text = Template.bind({});
Text.args = {
    inputType: 'text',
};

export const Alphabetic = Template.bind({});
Alphabetic.args = {
    inputType: 'alphabetic',
};