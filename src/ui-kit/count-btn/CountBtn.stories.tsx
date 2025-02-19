import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { CountBtn } from "./CountBtn";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof CountBtn>;

const meta: Meta<StoryProps> = {
    component: CountBtn,
    title: "Компоненты/CountBtn",
    tags: ["autodocs"],
    args: {
        maxQuantity: 10,
        quantity: 1,
        onIncrease: action("Increase clicked"),
        onDecrease: action("Decrease clicked"),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        quantity: 1,
    },
};

export const MaxQuantity: Story = {
    args: {
        quantity: 10,
    },
};

export const MinQuantity: Story = {
    args: {
        quantity: 0,
    },
};

export const MidQuantity: Story = {
    args: {
        quantity: 5,
    },
};

export const SmallSize: Story = {
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};