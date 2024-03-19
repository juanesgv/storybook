import { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../components/MyLabel";

const meta  = {
    title : "UI/Labbels/MyLabel",
    component : MyLabel,
    tags:['autodocs'],
    parameters : {
        layout: 'centered'
    }
} satisfies Meta<typeof MyLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label : 'Basic label'
    }
}