import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-scaling';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import Example4 from './example4';
import Example5 from './example5';

export interface Props {}

const DropdownScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
    </View>
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
    backgroundColor: 'white',
  },
});
