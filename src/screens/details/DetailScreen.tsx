import React from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import styles from './styles';
import {formatDate} from '../../utils';
import LargeButton from '../../components/buttons/large/LargeButton';
import {useNavigation} from '@react-navigation/native';
import {TDetailsNavigationProps} from '../../types/navigation.types';

const DetailScreen = ({route}: TDetailsNavigationProps) => {
  const {item} = route.params;
  const creationDate = formatDate(item.createdAt);
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.productName}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View>
        <Text style={styles.subtitle}>Detalles del producto</Text>
        <Text style={styles.creationDate}>{`Comprado el ${creationDate}`}</Text>
        <Text style={styles.subtitle2}>Con esta compra acumulaste:</Text>
        <Text style={styles.points}>{`${item.points} puntos`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <LargeButton title="Aceptar" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

export default DetailScreen;
