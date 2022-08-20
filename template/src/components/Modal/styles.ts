import { StyleSheet } from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    width: '100%',
    backgroundColor: 'gray',
    height: 40,
  },
  pan: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 12,
  },
});
