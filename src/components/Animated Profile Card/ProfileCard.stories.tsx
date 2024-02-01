import { Meta,StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";


const mt:Meta<typeof ProfileCard> = {
    component:ProfileCard,
    title:'组件/个人信息',
    parameters:{
        layout:'centered',
    },
    tags: ['autodocs'],
}


export default mt;
type Pc =  StoryObj<typeof ProfileCard>;


export const Default:Pc = {
    args:{

    }

}