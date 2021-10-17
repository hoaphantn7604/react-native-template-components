import { StyleSheet } from 'react-native';
import { isTablet, scale, width } from 'react-native-utils-scale';

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
    width: width / (isTablet ? 1.5 : 1.3),
    backgroundColor: 'white',
    borderRadius: scale(10),
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: scale(16),
    justifyContent: 'center',
  },
  title: {
    marginVertical: scale(16),
  },
  message: {
    marginBottom: scale(16),
  },
  button: {
    width: scale(80),
    height: scale(40),
  },
});
