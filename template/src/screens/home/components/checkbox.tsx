import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox } from 'react-native-utils-components';

export interface Props {
  name?: string;
}

const CheckboxScreen: React.FC<Props> = _props => {
  const [checkbox1, setCheckbox1] = useState<boolean>(false);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [checkbox3, setCheckbox3] = useState<boolean>(false);
  const [checkbox4, setCheckbox4] = useState<boolean>(false);

  return (
    <View style={styles.main}>
      <Checkbox
        check={checkbox1}
        label="Checkbox"
        onPress={() => setCheckbox1(!checkbox1)}
      />
      <Checkbox
        check={checkbox2}
        label="Checkbox"
        size={30}
        onPress={() => setCheckbox2(!checkbox2)}
      />
      <Checkbox
        check={checkbox3}
        type="radio"
        label="Checkbox"
        color="red"
        size={35}
        onPress={() => setCheckbox3(!checkbox3)}
      />
      <Checkbox
        check={checkbox4}
        type="radio"
        label="Checkbox"
        color="red"
        size={40}
        onPress={() => setCheckbox4(!checkbox4)}
      />
    </View>
  );
};

export default CheckboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
