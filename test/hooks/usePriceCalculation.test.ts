import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { usePriceCalculation } from "@hooks/usePriceCalculation";

describe("usePriceCalculation", () => {
    it("должен правильно рассчитывать цену со скидкой", () => {
        const { result } = renderHook(() => usePriceCalculation(100, 20));
        expect(result.current.finalPrice).toBe(80);
    });

    it("должен возвращать полную цену, если скидка 0%", () => {
        const { result } = renderHook(() => usePriceCalculation(100, 0));
        expect(result.current.finalPrice).toBe(100);
    });

    it("не должен возвращать отрицательную цену", () => {
        const { result } = renderHook(() => usePriceCalculation(50, 110));
        expect(result.current.finalPrice).toBe(0);
    });

    it("возвращает 0, если цена 0", () => {
        const { result } = renderHook(() => usePriceCalculation(0, 10));
        expect(result.current.finalPrice).toBe(0);
    });

    it("должен пересчитывать цену при изменении входных данных", () => {
        const { result, rerender } = renderHook(({ price, discount }) => usePriceCalculation(price, discount), {
            initialProps: { price: 200, discount: 10 },
        });
        expect(result.current.finalPrice).toBe(180);

        rerender({ price: 300, discount: 20 });
        expect(result.current.finalPrice).toBe(240);
    });

    it("должен корректно обрабатывать отрицательные цены", () => {
        const { result } = renderHook(() => usePriceCalculation(-100, 10));
        expect(result.current.finalPrice).toBe(0);
    });

    it("должен корректно обрабатывать скидку больше 100%", () => {
        const { result } = renderHook(() => usePriceCalculation(100, 150));
        expect(result.current.finalPrice).toBe(0);
    });
});
