// import { Button } from ".";

// <Button variant="outline">Button</Button>

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

 //Archivo creado para ejecutar los componentes en storybook y ver si funcionan correctamente

 //Ejemplos de botones de cada tipo
 //botón por defecto
 export const primary: Story = {
    //render: () => <Button />,
    args:{
      children: 'Default',
      variant: 'default',
    }
  };

//botón sin linea
  export const outline: Story = {
    //render: () => <Button />,
    args:{
      children: 'outline',
      variant: 'outline',
    }
  };
//Botón destructivo
  export const destructive: Story = {
    //render: () => <Button />,
    args:{
      children: 'destructive',
      variant: 'destructive',
    }
  };
//Botón fantasma
  export const ghost: Story = {
    args:{
      children: 'ghost',
      variant: 'ghost',
    }
  }
//Boton enlace
  export const link: Story = {
    args:{
      children: 'link',
      variant: 'link',
    }
  }
