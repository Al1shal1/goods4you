import { describe, it, expect, beforeEach } from "vitest";
import userReducer, {
    setUserId,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    fetchUserCart,
    fetchUpdateCart
} from "@store/userSlice";
import { IProduct } from "@models/IProduct";

const createTestProduct = (overrides?: Partial<IProduct>): IProduct => ({
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 100,
    thumbnail: "",
    quantity: 1,
    warrantyInformation: "",
    stock: 0,
    shippingInformation: "",
    description: "",
    discountPercentage: 0,
    images: [],
    rating: 0,
    tags: [],
    ...overrides,
});

describe("userSlice", () => {
    let initialState: ReturnType<typeof userReducer>;

    beforeEach(() => {
        initialState = userReducer(undefined, { type: "INIT" });
    });

    it("должен установить userId", () => {
        const newState = userReducer(initialState, setUserId(123));
        expect(newState.userId).toBe(123);
    });

    it("должен добавить товар в корзину", () => {
        const product = createTestProduct();
        const newState = userReducer(initialState, addItemToCart({ ...product, quantity: 1 }));

        expect(newState.carts?.products.length).toBe(1);
        expect(newState.carts?.products[0].id).toBe(product.id);
    });

    it("должен удалить товар из корзины", () => {
        const product = createTestProduct();
        let newState = userReducer(initialState, addItemToCart(product));
        expect(newState.carts).not.toBeNull();
        newState = userReducer(newState, removeItemFromCart(product.id));

        expect(newState.carts).toBeNull();
        expect(newState.removedProducts.length).toBe(1);
        expect(newState.removedProducts[0].id).toBe(product.id);
    });
    
    it("перемещает товар в removedProducts при нулевом количестве", () => {
        const product = createTestProduct();
        let newState = userReducer(initialState, addItemToCart(product));
        expect(newState.carts).not.toBeNull();
        newState = userReducer(newState, updateItemQuantity({ id: product.id, quantity: 0 }));
    
        expect(newState.carts).toBeNull();
        expect(newState.removedProducts.length).toBe(1);
        expect(newState.removedProducts[0].id).toBe(product.id);
    });

    it("должен обработать fetchUserCart.rejected", () => {
        const newState = userReducer(initialState, fetchUserCart.rejected(null, "", undefined));
        expect(newState).toEqual(initialState);
    });

    it("должен обработать fetchUpdateCart.rejected", () => {
        const newState = userReducer(initialState, fetchUpdateCart.rejected(null, "", { id: 1, products: [], totalQuantity: 2 }));
        expect(newState).toEqual(initialState);
    });
});
