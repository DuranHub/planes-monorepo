import React from 'react';
import { Combobox } from './index';
import { AddItemsForm } from './AddItemsForm';

export default {
    title: "Combobox",
    component: Combobox,
}

//Arguments for Combobox
const Template = args => <Combobox {...args} />

const FormArgs = args => <AddItemsForm {...args} />

//Combobox for storybook
export const Default = Template.bind({})
Default.args = {
    selectLabel: "Select item...",
    searchLabel: "Search item...",
    notFoundMessage: "No item found.",
    autoComplete: false, 
    items: [
        {
            value: 'item1',
            label: 'Item 1',
        },
        {
            value: 'test2',
            label: 'Test 2',
        },
        {
            value: 'odd3',
            label: 'Odd 3',
        },
        {
            value: "item4",
            label: "Item 4",
        },
    ],
}

export const Form = FormArgs.bind({})

export const AutoComplete = Template.bind({})
AutoComplete.args = {
    selectLabel: "Select person...",
    searchLabel: "Search person...",
    notFoundMessage: "",
    autoComplete: true, 
    items: [
        {
            value: 'alexander',
            label: 'Alexander',
        },
        {
            value: 'bella',
            label: 'Bella',
        },
        {
            value: 'carol',
            label: 'Carol',
        },
        {
            value: 'david',
            label: 'David',
        },
        {
            value: 'emma',
            label: 'Emma',
        },
        {
            value: 'frank',
            label: 'Frank',
        },
        {
            value: 'george',
            label: 'George',
        },
        {
            value: 'harry',
            label: 'Harry',
        },
        {
            value: 'isabella',
            label: 'Isabella',
        },
        {
            value: 'jackson',
            label: 'Jackson',
        },
    ],
    
}