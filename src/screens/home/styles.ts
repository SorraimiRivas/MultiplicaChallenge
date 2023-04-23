import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
    backgroundColor: '#F0F0F0',
  },

  subtitle: {
    fontFamily: 'Avenir',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19.12,
    marginTop: 20,
    color: '#9B9898',
  },

  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    width: 353,
    height: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  error: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 100,
    color: '#000000',
    alignSelf: 'center',
  },
});

export default styles;
