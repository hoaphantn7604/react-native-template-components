import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';

const TextInputComponent = props => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      value={value}
      style={styles.input}
      inputStyle={styles.inputStyle}
      labelStyle={styles.labelStyle}
      placeholderStyle={styles.placeholderStyle}
      textErrorStyle={styles.textErrorStyle}
      label="Password"
      placeholder="Placeholder"
      placeholderTextColor="gray"
      secureTextEntry
      onChangeText={text => {
        setValue(text);
      }}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    marginTop: 36,
    height: 55,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputStyle: { fontSize: 16 },
  labelStyle: { fontSize: 14 },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});
