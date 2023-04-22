import React, {FC, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView, View, FlatList} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import ProductCard from '../../components/cards/productCard/ProductCard';
import useAxios from '../../hooks/useGetData';
import {TProduct, calculateTotalPoints} from '../../utils';
import LargeButton from '../../components/buttons/large/LargeButton';
import MediumButton from '../../components/buttons/medium/MediumButton';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Filter = 'Todos' | 'Ganados' | 'Canjeados';

const HomeScreen: FC = () => {
  const [filter, setFilter] = useState<Filter>('Todos');

  const {data, fetchData} = useAxios();
  const navigation = useNavigation<NavigationProps>();

  const filteredData = (str: string) => {
    switch (str) {
      case 'Todos':
        return data;
      case 'Ganados':
        return data.filter(item => item.isRedeemed === false);
      case 'Canjeados':
        return data.filter(item => item.isRedeemed === true);
      default:
        return data;
    }
  };

  const totalPoints = calculateTotalPoints(data);

  const handleProductOnPress = (item: TProduct) => {
    navigation.navigate('Details', {item});
  };

  const handleShowAllFilter = () => {
    setFilter('Todos');
  };

  const handleObtainedFilter = () => {
    setFilter('Ganados');
  };

  const handleRedeemedFilter = () => {
    setFilter('Canjeados');
  };

  const renderItem: FC<{item: TProduct}> = ({item}) => {
    return (
      <ProductCard
        onPress={() => handleProductOnPress(item)}
        productName={item.productName}
        createdAt={item.createdAt}
        points={item.points}
        isRedeemed={item.isRedeemed}
        image={item.image}
      />
    );
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Text style={styles.totalPoints}>{`${totalPoints} pts`}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
      </View>
      <View style={styles.productContainer}>
        <FlatList
          keyExtractor={(item, index) => `${item.id + index.toString()}`}
          showsVerticalScrollIndicator={false}
          data={filteredData(filter)}
          renderItem={renderItem}
        />
      </View>
      <View>
        {filter !== 'Todos' ? (
          <LargeButton title="Todos" onPress={handleShowAllFilter} />
        ) : (
          <View style={styles.buttonsContainer}>
            <MediumButton title="Ganados" onPress={handleObtainedFilter} />
            <MediumButton title="Canjeados" onPress={handleRedeemedFilter} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
