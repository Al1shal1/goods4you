import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Provider } from "react-redux";
import { setupStore } from "@store/index";
import { MemoryRouter } from "react-router-dom";

const store = setupStore();

const meta: Meta<typeof Headers> = {
    title: "Компоненты/Header",
    component: Header,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <Provider store={store}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </Provider>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof Headers>;

export const Primary: Story = {};
