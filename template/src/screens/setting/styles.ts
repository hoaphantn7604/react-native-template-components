import { StyleSheet } from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  imgBackground: { width: '100%', height: 250 },
  wrap: {
    marginTop: 64,
  },
  avatarImg: {
    borderRadius: 50,
  },
  name: {
    marginTop: 16,
    alignSelf: 'center',
  },
  wrapMenu: {
    flex: 1,
    marginBottom: 55,
  },
  rowMenu: {
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#F8F8FF',
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textMenu: {
    marginHorizontal: 8,
  },
});
