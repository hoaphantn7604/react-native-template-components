import { StyleSheet } from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    marginVertical: 16,
  },
  message: {
    marginBottom: 16,
  },
  button: {
    width: 80,
    height: 40,
  },
});
