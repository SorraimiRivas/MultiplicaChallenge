import React from 'react';
import renderer from 'react-test-renderer';
import LargeButton from '../src/components/buttons/large/LargeButton';

test('renders correctly', () => {
  const tree = renderer
    .create(<LargeButton title="Test" onPress={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
