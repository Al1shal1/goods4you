import { useMemo } from 'react';

export const usePriceCalculation = (price: number, discountPercentage: number) => {
    const discount = useMemo(() => {
        return +((price * discountPercentage) / 100).toFixed(1);
    }, [price, discountPercentage]);

    const finalPrice = useMemo(() => {
        return (price - discount).toFixed(1);
    }, [price, discount]);

    const formattedPrice = useMemo(() => {
        const basePrice = price ?? 1;
        return (basePrice - parseFloat(finalPrice)).toFixed(1);
    }, [price, finalPrice]);

    return { finalPrice, formattedPrice };
};
