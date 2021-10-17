import { StyleSheet } from 'react-native';
import { hasNotch, scale } from 'react-native-utils-toolkit';

export const styles = StyleSheet.create({
  container: {
    marginTop: scale(hasNotch ? 10 : 20),
    height: scale(55),
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: scale(8),
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  input: {
    backgroundColor: '#EEEEEE',
    paddingLeft: scale(16),
    paddingRight: scale(8),
    marginHorizontal: scale(8),
    borderRadius: scale(22),
    height: scale(40),
  },
  wrapUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapAvatar: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
  },
  name: { marginLeft: scale(8), maxWidth: scale(150) },
});
