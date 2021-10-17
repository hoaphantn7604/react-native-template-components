import { StyleSheet } from 'react-native';
import { useScale } from 'react-native-utils-scale';

const { scale } = useScale;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(10),
  },
  header: {
    width: '100%',
    backgroundColor: 'gray',
    height: scale(40),
  },
  pan: {
    width: scale(40),
    height: scale(5),
    borderRadius: scale(5),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: scale(12),
  },
});
