import React from 'react';
import { Input } from './index';
import ComponentResolver from './componentResolver';
import { validate } from './validate'
import {validate_Input} from './validate'
import { IntegerInput } from './integerInput';

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
validate();

const Template = (args) => <ComponentResolver {...args} />; //Arguments for component resolver

const IntegerInputArgs = args => <IntegerInput {...args} />


export const Text = Template.bind({});
Text.args = {
    inputType: 'text',
};

export const Alphabetic = Template.bind({});
Alphabetic.args = {
    inputType: 'alphabetic',
};

export const Integer_Second = IntegerInputArgs.bind({});
Integer_Second.args = {
    inputType: 'Integer',
    //type: 'number',
    placeholder: "123",
    value: 1,
};
