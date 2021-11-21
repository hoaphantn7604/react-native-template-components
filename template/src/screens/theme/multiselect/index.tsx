import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-utils-scale';
import Example1 from './example1';
import Example2 from './example2';

export interface Props {}

const MultiSelectScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <Example1 />
      <Example2 />
    </View>
  );
};

export default MultiSelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
});
