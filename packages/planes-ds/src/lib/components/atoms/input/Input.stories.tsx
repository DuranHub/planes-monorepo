import React from 'react';
import { Input } from './index';

export default {
    title: "Input",
    component: Input
}

//Arguments for input
const InputArgs = args => <Input {...args} />

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

//Text
export const Text = InputArgs.bind({})
Text.args = {
    placeholder: "Base Text",
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