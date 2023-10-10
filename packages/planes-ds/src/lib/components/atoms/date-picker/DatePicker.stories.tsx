import React from 'react';
import ComponentResolver from './componentResolver';

export default {
    title: 'Date Input',
    component: ComponentResolver,
    argTypes: {
        dateType: { //Combobox for selecting date types
            type: 'select',
            options: ['date', 'date-range']
        }
    }
};

const Template = (args) => <ComponentResolver {...args} />; //Arguments for component resolver

export const DatePicker = Template.bind({});
DatePicker.args = {
    dateType: 'date',
};

export const DateRangePicker = Template.bind({});
DateRangePicker.args = {
    dateType: 'date-range',
};
