import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Input> = {
    title: "Компоненты/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        placeholder: { control: "text" },
    },
    args: { onChange: fn() },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Simple: Story = {
    args: {
        placeholder: "Search by title",
    },
};

export const SimpleFilled: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.type(
            canvas.getByPlaceholderText("Search by title"),
            "Apple",
            { delay: 200 },
        );
    },
    args: {
        placeholder: "Search by title",
    },
};

