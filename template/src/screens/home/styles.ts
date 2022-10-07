import { StyleSheet } from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  itemSlider: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSlider: {},
  item: {
    backgroundColor: '#F8F8FF',
    padding: 8,
    margin: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  img: {
    borderRadius: 8,
  },
  text: {
    marginVertical: 8,
    alignSelf: 'center',
  },
});
