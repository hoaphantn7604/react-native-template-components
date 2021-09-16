import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: scale(16),
  },
  title: {
    alignSelf: 'center',
    marginBottom: scale(32),
  },
  textinput: {
    borderBottomWidth: scale(0.5),
    borderBottomColor: 'gray',
  },
  button: {
    marginTop: scale(32),
    borderWidth: scale(0.5),
    height: scale(50),
  },
});
