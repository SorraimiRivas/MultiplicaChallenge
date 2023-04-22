type RawProductData = {
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

export const formatDataArray = (rawData: RawProductData[]): TProduct[] => {
  return rawData.map((item: RawProductData) => {
    return {
      id: item.id,
      productName: item.product,
      createdAt: item.createdAt,
      points: item.points,
      image: item.image,
      isRedeemed: item.is_redemption,
    };
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const dayOfMonth = date.getUTCDate();
  const month = date.toLocaleString('es-ES', {month: 'long'});
  const year = date.getUTCFullYear();
  return `${dayOfMonth} de ${month}, ${year}`;
};

export const calculateTotalPoints = (arr: TProduct[]): number => {
  let totalPositivePoints = 0;
  let totalNegativePoints = 0;

  arr.forEach(item => {
    if (item.isRedeemed) {
      totalPositivePoints += item.points;
    } else {
      totalNegativePoints += item.points;
    }
  });
  return totalPositivePoints - totalNegativePoints;
};
