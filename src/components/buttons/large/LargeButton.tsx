import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {TButtonProps} from '../../../types/components.types';

const LargeButton: FC<TButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;
