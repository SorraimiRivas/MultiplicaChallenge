import {View, Text, Image, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './style';

type Props = {
  productName: string;
  createdAt: string;
  points: number;
  image: string;
  isRedemption: boolean;
  onPress: () => void;
};

const ProductCard: FC<Props> = ({
  onPress,
  productName,
  points,
  createdAt,
  image,
  isRedemption,
}) => {
  const signColor = isRedemption ? 'red' : 'green';

  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={{color: signColor, fontWeight: '800'}}>
          {isRedemption ? '- ' : '+ '}
          <Text style={styles.points}>{points}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.arrow}>{'\u003e'}</Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
