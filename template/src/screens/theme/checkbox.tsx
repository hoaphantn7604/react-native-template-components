import { Checkbox } from 'components';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-utils-scale';

export interface Props {}

const CheckboxScreen: React.FC<Props> = _props => {
  const [check, setCheck] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [check3, setCheck3] = useState<boolean>(false);
  const [check4, setCheck4] = useState<boolean>(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Checkbox
          check={check}
          label="Checkbox 1"
          onPress={e => {
            setCheck(e);
          }}
        />
        <Checkbox
          check={check2}
          size={scale(26)}
          label="Checkbox 2"
          onPress={e => {
            setCheck2(e);
          }}
        />

        <Checkbox
          check={check3}
          type="radio"
          size={scale(28)}
          label="Checkbox 3"
          onPress={e => {
            setCheck3(e);
          }}
        />

        <Checkbox
          check={check4}
          type="radio"
          size={scale(30)}
          label="Checkbox 4"
          onPress={e => {
            setCheck4(e);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
});
