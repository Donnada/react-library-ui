import { ProCard } from "./product-card";
import { Meta,StoryObj } from "@storybook/react";


const mt:Meta<typeof ProCard> = {
    component:ProCard,
    title:'组件/product-card',
    tags: ['autodocs'],

}
export default mt;
type Pc = StoryObj<typeof ProCard>;


export const Default:Pc = {
    args:{
    },

}
Default.storyName = '通用的购物卡片'