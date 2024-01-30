import type { Meta, StoryObj } from '@storybook/react';

import  {Button}  from './Button';



const meta: Meta<typeof Button> = {
  component: Button,
  title:'组件/Button',
  tags: ['autodocs'],
  parameters:{
    layout:'centered',
  },
  argTypes:{
    backgroundColor:{control:'color'},
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args:{
    styles:'btn-hw-nav',
    label: '华为',
  },
};
Primary.storyName = '华为导航按钮';

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: '立即购买',
    styles:'btn-hw-buy',
    
  },
};
Secondary.storyName = '华为商城按钮';


export const Tertiary: Story = {
  args: {
    ...Primary.args,
    label: '炫酷色彩',
    styles:'btn-o',
  },
};
Tertiary.storyName = '炫酷色彩按钮';

