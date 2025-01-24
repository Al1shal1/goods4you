export interface IProduct {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
    warrantyInformation: string;
    stock: number;
    shippingInformation: string;
    description: string;
    discountPercentage: number;
    images: string[];
    rating: number;
  }