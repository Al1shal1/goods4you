import { IProduct } from "./IProduct";

export interface ICart {
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
    total: number;
    userId: number;
    products: IProduct[];
    
}