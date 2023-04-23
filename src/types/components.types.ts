export type TProductCardProps = {
  productName: string;
  createdAt: string;
  points: number;
  image: string;
  isRedeemed: boolean;
  onPress: () => void;
};

export type TButtonProps = {
  title: string;
  onPress: () => void;
};
