import type { Meta, StoryObj } from '@storybook/react';

import  Button  from './Button';



const meta: Meta<typeof Button> = {
  component: Button,
  title:'Button'
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Hello world',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'read more',
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    label: '📚📕📈🤓',
  },
};