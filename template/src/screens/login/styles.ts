import { COLORS } from 'config';
import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    padding: scale(16),
  },
  wrapBox: {
    backgroundColor: '#F8F8FF',
    margin: scale(16),
    paddingHorizontal: scale(16),
    paddingBottom: scale(32),
    borderRadius: scale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    alignSelf: 'center',
    marginBottom: scale(16),
    color: 'gray',
  },
  textinput: {
    backgroundColor: 'white',
    marginTop: scale(20),
    height: scale(60),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inputStyle: { fontSize: fontScale(16) },
  labelStyle: { fontSize: fontScale(14) },
  placeholderStyle: { fontSize: fontScale(16) },
  textErrorStyle: { fontSize: fontScale(14) },
  button: {
    backgroundColor: 'white',
    marginTop: scale(32),
    height: scale(50),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textOr: {
    alignSelf: 'center',
    marginTop: scale(16),
    color: 'gray',
  },
});
