import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  totalPointsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 286,
    height: 143,
    backgroundColor: '#334FFA',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
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
});

export default styles;
