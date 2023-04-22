import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView, View, FlatList} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import ProductCard from '../../components/cards/productCard/ProductCard';
import useAxios from '../../hooks/useGetData';
import {TProduct} from '../../utils';
import LargeButton from '../../components/buttons/large/LargeButton';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: FC = () => {
  const data = useAxios();
  const navigation = useNavigation<NavigationProps>();

  const handleOnPress = (item: TProduct) => {
    navigation.navigate('Details', {item});
  };

  const renderItem: FC<{item: TProduct}> = ({item}) => {
    return (
      <ProductCard
        onPress={() => handleOnPress(item)}
        productName={item.productName}
        createdAt={item.createdAt}
        points={item.points}
        isRedeemed={item.isRedeemed}
        image={item.image}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Bienvenido de vuelta!</Text>
        <Text style={styles.name}>Sorraimi Rivas</Text>
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        />
      </View>
      <LargeButton title="Todos" />
    </SafeAreaView>
  );
};

export default HomeScreen;
