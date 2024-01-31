import {Narbar} from "./Narbar";
import { Meta,StoryObj } from "@storybook/react";


const meta:Meta<typeof Narbar> ={
  component: Narbar,
  title: '组件/Narbar',
  tags: ['autodocs'],
}

export default meta;
type Nb = StoryObj<typeof Narbar>;

export const Default:Nb = {
    args:{
      styles:'ytb',
    },
}
// export const cefault = {
//   args: {
//     task: {
//       id: '1',
//       title: 'Test Task',
//       state: 'TASK_INBOX',
//     },
//   },
// };


