import { useMemo } from 'react';

export const usePriceCalculation = (price: number, discountPercentage: number) => {
    const discount = useMemo(() => {
        return (price * discountPercentage) / 100;
    }, [price, discountPercentage]);

    const finalPrice = useMemo(() => {
        return Math.max(0, +(price - discount).toFixed(1));
    }, [price, discount]);

    return { finalPrice, discount };
};