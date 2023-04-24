import React from 'react';
import renderer from 'react-test-renderer';
import MediumButton from '../src/components/buttons/medium/MediumButton';

test('renders MediumButton correctly', () => {
  const component = renderer.create(
    <MediumButton title="Test" onPress={() => null} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
