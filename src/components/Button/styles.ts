import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(5),
    paddingHorizontal: scale(10),
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: 'bold',
    marginLeft: scale(5),
    textAlign: 'center',
  },
});
