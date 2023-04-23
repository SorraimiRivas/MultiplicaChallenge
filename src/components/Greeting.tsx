import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TGreetingProps} from '../types/components.types';

const Greeting: FC<TGreetingProps> = ({userName}) => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greeting}>Bienvenido de vuelta!</Text>
      <Text style={styles.name}>{userName}</Text>
    </View>
  );
};

export default Greeting;
