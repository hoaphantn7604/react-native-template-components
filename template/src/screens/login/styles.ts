import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

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
    height: scale(50),
    borderBottomColor: 'gray',
  },
  inputStyle: { fontSize: fontScale(16) },
  labelStyle: { fontSize: fontScale(18) },
  textErrorStyle: { fontSize: fontScale(16) },
  button: {
    marginTop: scale(32),
    borderWidth: scale(0.5),
    height: scale(50),
  },
  textOr: {
    alignSelf: 'center',
    marginTop: scale(16),
  },
});
