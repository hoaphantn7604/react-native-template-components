import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  itemSlider: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSlider: {
    borderRadius: scale(8),
  },
  item: {
    padding: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    borderRadius: scale(8),
  },
  text: {
    marginVertical: scale(8),
    alignSelf: 'center',
  },
});
