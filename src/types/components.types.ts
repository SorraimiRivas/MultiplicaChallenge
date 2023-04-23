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

export type TPointsCardProps = {
  points: number;
  month: string;
};

export type TGreetingProps = {
  userName: string;
};
