import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {formatDate} from '../../../utils';
import {TProductCardProps} from '../../../types/components.types';

const ProductCard: FC<TProductCardProps> = ({
  onPress,
  productName,
  points,
  createdAt,
  image,
  isRedeemed,
}) => {
  const formatedCreatedAt = formatDate(createdAt);
  const sign = isRedeemed ? '- ' : '+';
  const signColor = !isRedeemed ? 'green' : 'red';

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.createdAt}>{formatedCreatedAt}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={[styles.sign, {color: signColor}]}>
          {sign}
          <Text style={styles.points}>{points}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.arrow}>{'\u003e'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
