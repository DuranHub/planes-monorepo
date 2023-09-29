import React from 'react';
import { Button } from './index';

export default {
    title: "Button",
    component: Button
}

//Arguments for Button
const ButtonArgs = args => <Button {...args} />

//Base Button
export const Default = ButtonArgs.bind({})
Default.args = {
    children: 'Button',
    variant: 'default',
}

//Destructive
export const Destructive = ButtonArgs.bind({})
Destructive.args = {
    children: 'Button',
    variant: 'destructive',
}

//Outline
export const Outline = ButtonArgs.bind({})
Outline.args = {
    children: 'Button',
    variant: 'outline',
}

//Secondary
export const Secondary = ButtonArgs.bind({})
Secondary.args = {
    children: 'Button',
    variant: 'secondary',
}

//Ghost
export const Ghost = ButtonArgs.bind({})
Ghost.args = {
    children: 'Button',
    variant: 'ghost',
}

//Link
export const Link = ButtonArgs.bind({})
Link.args = {
    children: 'Button',
    variant: 'link',
}
