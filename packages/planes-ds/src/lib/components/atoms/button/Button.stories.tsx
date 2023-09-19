import type { Meta, StoryObj } from '@storybook/react';
import { Button, buttonVariants, ButtonProps } from './index';
import React from 'react';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'default',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Button',
        variant: 'destructive',
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Button',
        variant: 'ghost',
    },
};

export const Link: Story = {
    args: {
        children: 'Button',
        variant: 'link',
    },
};