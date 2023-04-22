import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
  },

  titleContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#CFD6FF',
  },

  title: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 24,
    color: '#000000',
    top: 102,
    left: 20,
  },

  imageContainer: {
    width: 353,
    height: 350,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    top: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  subtitle: {
    marginLeft: 20,
    marginTop: 40,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    color: '#9B9898',
  },

  subtitle2: {
    marginLeft: 20,
    marginTop: 20,
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 14,
    color: '#9B9898',
  },

  creationDate: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
    marginLeft: 20,
  },

  points: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 24,
    color: '#000000',
    marginTop: 30,
    marginLeft: 20,
  },

  buttonContainer: {
    alignSelf: 'center',
  },
});

export default styles;
