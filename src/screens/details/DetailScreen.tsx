import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Button, SafeAreaView} from 'react-native';

const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Detail Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default DetailScreen;
