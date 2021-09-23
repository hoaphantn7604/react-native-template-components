import { StyleSheet } from 'react-native';
import { scale, width } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  imgBackground: { width: width, height: scale(250) },
  wrap: {
    width: scale(105),
    height: scale(105),
    borderRadius: scale(52),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: scale(64),
  },
  avatarImg: {
    borderRadius: scale(50),
  },
  name: {
    marginTop: scale(16),
    alignSelf: 'center',
  },
  wrapMenu: {
    flex: 1,
    marginBottom: scale(55),
  },
  rowMenu: {
    flexDirection: 'row',
    padding: scale(16),
    borderBottomWidth: scale(0.3),
    borderBottomColor: 'gray',
  },
  textMenu: {
    marginHorizontal: scale(8),
  },
});
