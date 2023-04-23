import {calculateTotalPoints, formatDataArray, formatDate} from '../src/utils';
import {TProduct, TRawProductData} from '../src/types/utils.types';

describe('formatDate', () => {
  it('should format date in Spanish long format', () => {
    const dateString = '2023-04-23T18:25:43.511Z';

    expect(formatDate(dateString)).toEqual('23 de abril, 2023');
  });

  it('should return empty string if date string is invalid', () => {
    const dateString = 'invalid-date-string';

    expect(formatDate(dateString)).toEqual('-/-/-');
  });
});

describe('formatDataArray', () => {
  it('should format an array of raw product data into an array of product objects', () => {
    const rawData: TRawProductData[] = [
      {
        id: 1,
        product: 'Product A',
        createdAt: '2023-04-23T18:25:43.511Z',
        points: 100,
        image: 'https://example.com/image.png',
        is_redemption: false,
      },
      {
        id: 2,
        product: 'Product B',
        createdAt: '2023-04-22T12:00:00.000Z',
        points: 200,
        image: 'https://example.com/image2.png',
        is_redemption: true,
      },
    ];

    const expectedFormattedData = [
      {
        id: 1,
        productName: 'Product A',
        createdAt: '2023-04-23T18:25:43.511Z',
        points: 100,
        image: 'https://example.com/image.png',
        isRedeemed: false,
      },
      {
        id: 2,
        productName: 'Product B',
        createdAt: '2023-04-22T12:00:00.000Z',
        points: 200,
        image: 'https://example.com/image2.png',
        isRedeemed: true,
      },
    ];

    expect(formatDataArray(rawData)).toEqual(expectedFormattedData);
  });

  it('should return an empty array if raw data array is empty', () => {
    const rawData: TRawProductData[] = [];

    expect(formatDataArray(rawData)).toEqual([]);
  });
});

describe('calculateTotalPoints', () => {
  it('should calculate the total points correctly for an array of products', () => {
    const data: TProduct[] = [
      {
        id: 1,
        productName: 'Product A',
        createdAt: '2023-04-23T18:25:43.511Z',
        points: 100,
        image: 'https://example.com/image.png',
        isRedeemed: false,
      },
      {
        id: 2,
        productName: 'Product B',
        createdAt: '2023-04-22T12:00:00.000Z',
        points: 200,
        image: 'https://example.com/image2.png',
        isRedeemed: true,
      },
      {
        id: 3,
        productName: 'Product C',
        createdAt: '2023-04-21T09:30:00.000Z',
        points: 50,
        image: 'https://example.com/image3.png',
        isRedeemed: false,
      },
    ];

    expect(calculateTotalPoints(data)).toEqual(50);
  });

  it('should return 0 if the array is empty', () => {
    const data: TProduct[] = [];

    expect(calculateTotalPoints(data)).toEqual(0);
  });
});
