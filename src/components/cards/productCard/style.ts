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

  productName: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    color: '#000000',
    lineHeight: 19.12,
  },

  createdAt: {
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 12,
    color: '#000000',
    lineHeight: 16.39,
  },

  pointsContainer: {
    marginLeft: 50,
    left: 40,
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
    left: 63,
  },
});

export default styles;
