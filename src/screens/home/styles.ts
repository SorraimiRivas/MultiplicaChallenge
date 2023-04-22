import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
    backgroundColor: '#F0F0F0',
  },

  greetingContainer: {
    width: 209,
    height: 48,
    marginTop: 20,
  },

  greeting: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 27.32,
    color: '#020202',
  },

  name: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27.32,
    color: '#020202',
  },

  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19.12,
    marginTop: 20,
    color: '#9B9898',
  },

  totalPointsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 286,
    height: 143,
    backgroundColor: '#334FFA',
    borderRadius: 20,
    left: 35,
    marginTop: 20,
  },

  month: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    left: 18,
    top: 21,
  },

  totalPoints: {
    fontFamily: 'Avenir',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    top: 21,
    color: '#FFFFFF',
    lineHeight: 43.71,
  },

  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 353,
    height: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 20,
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
