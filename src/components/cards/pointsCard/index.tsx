import {View, Text} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {TPointsCardProps} from '../../../types/components.types';

const PointsCard: FC<TPointsCardProps> = ({points, month}) => {
  return (
    <View style={styles.totalPointsContainer}>
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.totalPoints}>{`${points} pts`}</Text>
    </View>
  );
};

export default PointsCard;
