import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '../src/navigation';

describe('Testing navigation', () => {
  test('renders the home screen"', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>,
    );
    const greeting = getByText('Bienvenido de vuelta!');
    expect(greeting).toBeTruthy();
  });
});
