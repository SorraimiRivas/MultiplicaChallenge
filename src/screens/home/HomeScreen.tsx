import React, {FC, useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView, View, FlatList, StatusBar} from 'react-native';
import styles from './styles';
import ProductCard from '../../components/cards/productCard/ProductCard';
import {calculateTotalPoints} from '../../utils';
import LargeButton from '../../components/buttons/large/LargeButton';
import MediumButton from '../../components/buttons/medium/MediumButton';
import {TProduct} from '../../types/utils.types';
import {TRootStackParamList} from '../../types/navigation.types';
import useAxios from '../../hooks/useAxios';
import PointsCard from '../../components/cards/pointsCard';
import Greeting from '../../components/Greeting';

const HomeScreen: FC = () => {
  const [filter, setFilter] = useState<string>('Todos');

  const {data, fetchData, isError} = useAxios();
  const navigation = useNavigation<NavigationProp<TRootStackParamList>>();

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
      {!isError && (
        <>
          <StatusBar backgroundColor="#F8F8F8" barStyle="dark-content" />
          <Greeting userName="Sorraimi Rivas" />
          <View>
            <Text style={styles.subtitle}>TUS PUNTOS</Text>
          </View>
          <PointsCard points={totalPoints} month="Diciembre" />
          <View>
            <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
          </View>
          <View style={styles.productContainer}>
            <FlatList
              ListEmptyComponent={<Text>No hay productos</Text>}
              testID="product-list"
              keyExtractor={(item, index) => `${item.id + index.toString()}`}
              showsVerticalScrollIndicator={false}
              data={filteredData(filter)}
              renderItem={renderItem}
              maxToRenderPerBatch={10}
            />
          </View>
          <View>
            {filter !== 'Todos' ? (
              <LargeButton title="Todos" onPress={handleShowAllFilter} />
            ) : (
              <View style={styles.buttonsContainer}>
                <MediumButton title="Ganados" onPress={handleObtainedFilter} />
                <MediumButton
                  title="Canjeados"
                  onPress={handleRedeemedFilter}
                />
              </View>
            )}
          </View>
        </>
      )}
      <Text style={styles.error}>No hay nada que mostrar aqui!</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
