import React from 'react';
import { Input } from './index';

export default {
    title: "Input",
    component: Input
}

//Arguments for input
const InputArgs = args => <Input {...args} />

//Text Input Component
export const Text = InputArgs.bind({})
Text.args = {
    placeholder: "Text Input Component",
    maxLength: 200,
}

//Decimal Value
export const DecimalValue = InputArgs.bind({})
DecimalValue.args = {
    placeholder: "3.14",
}

//Integer Value
export const IntegerValue = InputArgs.bind({})
IntegerValue.args = {
    placeholder: "21",
}

//Alphabetic Text
export const AlphabeticText = InputArgs.bind({})
AlphabeticText.args = {
    placeholder: "Hello World!",
}

//Alphanumeric Text
export const AlphanumericText = InputArgs.bind({})
AlphanumericText.args = {
    placeholder: "Hello123",
}