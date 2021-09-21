import { COLORS } from 'config';
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scale(50),
    backgroundColor: COLORS.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {},
  button: {
    marginVertical: scale(5),
    backgroundColor: 'white',
    borderRadius: scale(24),
    width: scale(200),
  },
  curtainView: {
    width: '100%',
    marginBottom: 20,
    position: 'absolute',
    top: 0,
    zIndex: 99,
  },
  curtainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
