import { StyleSheet } from 'react-native-size-scaling';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 55,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  input: {
    backgroundColor: '#EEEEEE',
    paddingLeft: 16,
    paddingRight: 8,
    marginHorizontal: 8,
    borderRadius: 22,
    height: 40,
  },
  wrapUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapAvatar: {
    width: 32,
    height: 32,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  name: { marginLeft: 8, maxWidth: 150 },
});
