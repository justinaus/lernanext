import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { IRadio } from './radio.interface';
import RadioFormControl from './RadioFormControl';

export default {
  title: 'Example/Radio',
  component: RadioFormControl,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    margin: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    focused: {
      table: {
        disable: true,
      },
    },
    hiddenLabel: {
      table: {
        disable: true,
      },
    },
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RadioFormControl>;

const RADIO_DATAS: IRadio[] = [
  { id: 'albumId' },
  { id: 'id' },
  { id: 'title', disabled: true },
];

const Template: ComponentStory<typeof RadioFormControl> = (args) => (
  <RadioFormControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isRow: false,
  datas: RADIO_DATAS,
  selectedId: 'id',
  label: 'Label',
};
