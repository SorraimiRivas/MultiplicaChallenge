import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView, View} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import ProductCard from '../../components/cards/productCard/ProductCard';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleOnPress: () => void = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Bienvenido de vuelta!</Text>
        <Text style={styles.name}>Ruben Rodriguez</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>TUS PUNTOS</Text>
      </View>
      <View style={styles.totalPointsContainer}>
        <Text style={styles.month}>Diciembre</Text>
        <Text style={styles.totalPoints}>10,00.00 pts</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
      </View>
      <View style={styles.productContainer}>
        <ProductCard
          onPress={handleOnPress}
          productName="Pato de Hule"
          createdAt="26 de Enero, 2019"
          points={1000}
          isRedemption={true}
          image="https://loremflickr.com/cache/resized/65535_51283865812_c660869cf5_b_640_480_nofilter.jpg"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
