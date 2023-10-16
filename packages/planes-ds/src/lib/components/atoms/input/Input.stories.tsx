import React from 'react';
import { Input } from './index';
import ComponentResolver from './componentResolver';
import { IntegerInput } from './integerInput';
import { DecimalInput } from './decimalInput';

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

const IntegerInputArgs = args => <IntegerInput {...args} />

const DecimalInputArgs = args => <DecimalInput {...args} />

export const Text = Template.bind({});
Text.args = {
    inputType: 'text',
};

export const Alphabetic = Template.bind({});
Alphabetic.args = {
    inputType: 'alphabetic',
};

export const Integer = IntegerInputArgs.bind({});
Integer.args = {
    inputType: 'Integer',
    placeholder: "123",
    value: 1,
};

export const Decimal = DecimalInputArgs.bind({});
Decimal.args = {
    inputType: 'Decimal',
    placeholder: "1.23",
};
