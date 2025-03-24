import { Meta, StoryObj } from "@storybook/react";
import { HeaderLogin } from "./HeaderLogin";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof HeaderLogin> = {
    component: HeaderLogin,
    title: "Компоненты/HeaderLogin",
    tags: ["autodocs"],
    decorators: [(Story) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    )],
};

export default meta;

type Story = StoryObj<typeof HeaderLogin>;

export const Primary: Story = {};