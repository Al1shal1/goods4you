import { RedButton } from "./RedButton";
import { Meta, StoryObj } from "@storybook/react";
import "./RedButton.module.scss";
import { action } from "@storybook/addon-actions";
import img from "@icons/cart.svg";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof RedButton>;

const meta: Meta<StoryProps> = {
    component: RedButton,
    title: "Компоненты/Button",
    tags: ["autodocs"],
    args: {
        onClick: action('clicked'),
        disabled: false,
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        text: "Add to cart",
        size: "big",
    },
};

export const Disabled: Story = {
    args: {
        text: "Add to cart",
        disabled: true,
    },
    
};
export const WithIcon: Story = {
    args: {
        imageSrc: img,
        size: "small",
    },
};  

export const Loading: Story = {
    args: {
        loading: true,
        disabled: true,
        size: "big",
    },
};