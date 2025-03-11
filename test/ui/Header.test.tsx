import { describe, expect, it, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@ui-kit/header";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@store/userSlice";
import productReducer from "@store/productSlice";
import { baseApi } from "@api/baseApi";
import { authApi } from "@api/authApi";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const setupStore = (preloadedState = {}) =>
  configureStore({
    reducer: { 
      user: userReducer, 
      product: productReducer,
      [baseApi.reducerPath]: baseApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(baseApi.middleware)
        .concat(authApi.middleware),
    preloadedState,
  });

describe("Компонент Header", () => {
  let store: ReturnType<typeof setupStore>;

  beforeEach(() => {
    store = setupStore({
      user: {
        userId: 1,
        carts: { totalQuantity: 2, totalProducts: 1, total: 100, discountedTotal: 90, userId: 1, products: [] },
        removedProducts: [],
      },
      product: {
        catalogData: { products: [], skip: 0, total: 0 },
        loading: false,
      },
    });
  });

  interface User {
    firstName: string;
    lastName: string;
  }

  const renderHeader = (user: User | null = null) =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header user={user} />
        </MemoryRouter>
      </Provider>
    );

  it("отображает имя пользователя, если пользователь залогинен", () => {
    renderHeader({ firstName: "Иван", lastName: "Иванов" });
    expect(screen.getByText("Иван Иванов")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("отображает 'User', если пользователь не передан", () => {
    renderHeader();
    expect(screen.getByText("User")).toBeInTheDocument();
  });

  it("при клике на кнопку выхода происходит редирект на '/login'", () => {
    renderHeader({ firstName: "Иван", lastName: "Иванов" });
    fireEvent.click(screen.getByRole("button", { name: /Иван Иванов/i }));
    expect(navigateMock).toHaveBeenCalledWith("/login");
  });
});
