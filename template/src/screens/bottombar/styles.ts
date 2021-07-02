import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  button: {
    marginVertical: scale(5),
  },
  btnCircle: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: scale(30),
  },
  imgCircle: {
    width: scale(30),
    height: scale(30),
    tintColor: 'gray',
  },
  img: {
    width: scale(30),
    height: scale(30),
  },
});
