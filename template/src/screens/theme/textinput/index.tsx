import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-utils-scale';
import { ScrollView } from 'react-native-virtualized-view';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import Example4 from './example4';
import Example5 from './example5';

export interface Props {}

const TextInputScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
      </ScrollView>
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    backgroundColor: 'white',
  },
});
