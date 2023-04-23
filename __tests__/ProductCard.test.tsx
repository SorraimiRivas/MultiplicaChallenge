import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../src/components/cards/productCard/ProductCard';

test('renders ProductCard component', () => {
  const card = renderer
    .create(
      <ProductCard
        createdAt="3 de Marzo, 1995"
        points={100}
        isRedeemed={false}
        onPress={() => null}
        productName="Name"
        image="https://i.imgur.com/3l7u1Z2.jpg"
      />,
    )
    .toJSON();

  expect(card).toMatchSnapshot();
});
