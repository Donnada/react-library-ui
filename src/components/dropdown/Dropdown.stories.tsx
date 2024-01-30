
import { Meta,StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";


const meta:Meta<typeof Dropdown> = {
    component:Dropdown,
    title:'组件/Dropdown',
    tags:['autodocs'],
    parameters:{
        layout:'centered',
    }

}

export default meta;
type Story = StoryObj<typeof Dropdown>;
export const Primary:Story = {

};