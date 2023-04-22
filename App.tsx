import React from 'react';
import Navigation from './src/navigation';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar backgroundColor="black" barStyle={'default'} />
    </NavigationContainer>
  );
};

export default App;
