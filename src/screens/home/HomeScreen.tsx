import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Button, SafeAreaView} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
