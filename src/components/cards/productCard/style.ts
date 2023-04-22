import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 333,
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageContainer: {
    width: 55,
    height: 55,
  },

  image: {
    width: 45,
    height: 45,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  productInfoContainer: {
    marginRight: 30,
    width: 175,
    bottom: 5,
  },

  productName: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    color: '#000000',
  },

  createdAt: {
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 12,
    color: '#000000',
  },

  pointsContainer: {
    width: 60,
    bottom: 5,
    right: 25,
  },

  sign: {
    fontFamily: 'Avenir',
    fontWeight: '900',
    fontSize: 16,
  },

  points: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    color: '#000000',
  },

  arrow: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '800',
    bottom: 5,
    color: '#000000',
  },
});

export default styles;
