export type TRawProductData = {
  id: number;
  product: string;
  createdAt: string;
  points: number;
  image: string;
  is_redemption: boolean;
};

export type TProduct = {
  id: number;
  productName: string;
  createdAt: string;
  points: number;
  image: string;
  isRedeemed: boolean;
};
