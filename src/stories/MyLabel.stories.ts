import { Meta, StoryObj } from "@storybook/react";
import MyLabel, { type Props } from "../components/MyLabel";

const meta:Meta<Props>  = {
    title : "UI/Labels/MyLabel",
    component : MyLabel,
    tags:['autodocs'],
    parameters : {
        layout: 'centered'
    },
    argTypes: {
        size : {control : 'select'}
    }
} satisfies Meta<typeof MyLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label : 'Basic label'
    }
}
export const AllCaps: Story = {
    args: {
        label : 'All caps label',
        allCaps: true
    }
}
export const Secondary: Story = {
    args: {
        label : 'Secondary label',
        color : 'text-secondary'
    }
}
export const CustomColor: Story = {
    args: {
        label : 'Custom color label',
        fontColor : '#481589'
    }
}
export const CustomBackgroundColor: Story = {
    args: {
        label : 'Custom color label',
        fontColor : 'white',
        backgroundColor: 'black'
    }
}