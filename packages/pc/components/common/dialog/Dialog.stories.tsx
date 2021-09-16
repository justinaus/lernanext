import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { BaseDialog } from './BaseDialog';

export default {
  title: 'Example/Dialog',
  component: BaseDialog,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    onSubmit: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BaseDialog>;

const Template: ComponentStory<typeof BaseDialog> = (args) => (
  <BaseDialog {...args}>Hello</BaseDialog>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  fullWidth: true,
  title: 'Title',
  isShowPrimaryButton: true,
  isShowSecondaryButton: true,
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
};
