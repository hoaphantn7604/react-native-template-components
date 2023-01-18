import {StyleSheet} from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {flex: 1},
  item: {
    backgroundColor: '#F8F8FF',
    padding: 8,
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
  list: {
    padding: 8,
    rowGap: 16,
  },
  columnWrapperStyle: {
    columnGap: 16,
  },
});
