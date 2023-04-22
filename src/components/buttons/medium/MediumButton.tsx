import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

const MediumButton: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MediumButton;
