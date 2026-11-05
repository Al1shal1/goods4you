import { describe, it, expect, beforeEach, afterEach, Mock } from "vitest";
import { vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Auth } from "@components/auth";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@store/userSlice";
import { authApi, useLoginUserMutation } from "@api/authApi";
import { baseApi } from "@api/baseApi";

vi.mock("@api/authApi", async () => {
    const actual = await vi.importActual<typeof import("@api/authApi")>("@api/authApi");
    return {
        ...actual, 
        useLoginUserMutation: vi.fn(),
    };
});

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => navigateMock,
    };
});

const alertMock = vi.fn();
window.alert = alertMock;

const setupStore = (preloadedState = {}) =>
    configureStore({
        reducer: {
            user: userReducer,
            [baseApi.reducerPath]: baseApi.reducer,
            [authApi.reducerPath]: authApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(baseApi.middleware)
                .concat(authApi.middleware),
        preloadedState,
    });

describe("Страница Auth", () => {
    let store: ReturnType<typeof setupStore>;

    beforeEach(() => {
        store = setupStore();
        vi.clearAllMocks();
        localStorage.clear();

        (useLoginUserMutation as unknown as Mock).mockReturnValue([
            vi.fn(),
            { isLoading: false },
        ]);
    });

    afterEach(() => {
        vi.restoreAllMocks();
        localStorage.clear();
    });

    const renderAuth = () =>
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Auth />
                </MemoryRouter>
            </Provider>
        );

    it("рендерит форму логина", () => {
        renderAuth();
        expect(screen.getByPlaceholderText("Login")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Sign in/i })).toBeInTheDocument();
    });

    it("успешный вход вызывает loginUser, сохраняет токен и редиректит", async () => {
        const unwrapMock = vi.fn().mockResolvedValue({ accessToken: "fake_token", id: 1 });
        const loginMock = vi.fn().mockReturnValue({ unwrap: unwrapMock });
        (useLoginUserMutation as unknown as Mock).mockReturnValue([loginMock, { isLoading: false }]);

        renderAuth();

        fireEvent.change(screen.getByPlaceholderText("Login"), { target: { value: "testuser" } });
        fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "password" } });

        fireEvent.click(screen.getByRole("button", { name: /Sign in/i }));

        await waitFor(() => {
            expect(loginMock).toHaveBeenCalledWith({
                username: "testuser",
                password: "password",
                expiresInMins: 10,
            });
        });

        await waitFor(() => {
            expect(localStorage.getItem("token")).toBe("fake_token");
        });

        await waitFor(() => {
            expect(navigateMock).toHaveBeenCalledWith("/");
        });
    });

    it("отображает alert при неверных учетных данных", async () => {
        const apiError = {
            message: "Invalid credentials. Please try again.",
            status: 401
        };

        const loginMock = vi.fn().mockReturnValue({
            unwrap: vi.fn().mockRejectedValue(apiError)
        });

        (useLoginUserMutation as Mock).mockReturnValue([loginMock, { isLoading: false }]);

        renderAuth();

        fireEvent.change(screen.getByPlaceholderText("Login"), {
            target: { value: "wronguser" }
        });
        fireEvent.change(screen.getByPlaceholderText("Password"), {
            target: { value: "wrongpass" }
        });

        fireEvent.click(screen.getByRole("button", { name: /Sign in/i }));

        await waitFor(() => {
            expect(loginMock).toHaveBeenCalledWith({
                username: "wronguser",
                password: "wrongpass",
                expiresInMins: 10
            });
        });
        await waitFor(() => {
            expect(alertMock).toHaveBeenCalledWith("Invalid credentials. Please try again.");
        });
    });

    it("автоматически редиректит, если в localStorage уже есть токен", async () => {
        localStorage.setItem("token", "existing_token");

        renderAuth();

        await waitFor(() => {
            expect(navigateMock).toHaveBeenCalledWith("/");
        });
    });
});