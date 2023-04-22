import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const LargeButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;
