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
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
  },
  textMenu: {
    marginHorizontal: 8,
  },
});
