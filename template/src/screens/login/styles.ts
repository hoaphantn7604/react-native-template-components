import { StyleSheet } from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  wrapBox: {
    backgroundColor: '#F8F8FF',
    margin: 16,
    paddingHorizontal: 16,
    paddingBottom: 32,
    borderRadius: 8,
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
    marginVertical: 12,
    color: 'gray',
  },
  textinput: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 60,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inputStyle: { fontSize: 16 },
  labelStyle: { fontSize: 14 },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 14 },
  button: {
    backgroundColor: 'white',
    marginTop: 32,
    height: 50,
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
    marginTop: 16,
    color: 'gray',
  },
});
