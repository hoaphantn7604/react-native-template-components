import {
  StyleSheet
} from 'react-native';
import { useScale } from 'react-native-utils-toolkit';
const { scale } = useScale;


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
