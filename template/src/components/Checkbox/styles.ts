import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: {
    padding: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: scale(10),
  },
});
