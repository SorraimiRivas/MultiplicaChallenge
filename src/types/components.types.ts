export type TProductCardProps = {
  productName: string;
  createdAt: string;
  points: number;
  image: string;
  isRedeemed: boolean;
  onPress: () => void;
};
