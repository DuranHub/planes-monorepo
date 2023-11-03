import React from 'react';
import { DateInput } from './index';

export default {
    title: 'Date Input',
    component: DateInput,
    argTypes: {
        mode: { //Combobox for selecting date types
            type: 'select',
            options: ['single', 'range']
        }
    }
};

const Template = (args) => <DateInput {...args} />; //Arguments for Date Input

export const Single = Template.bind({});
Single.args = {
    mode: 'single',
};

export const Range = Template.bind({});
Range.args = {
    mode: 'range',
};