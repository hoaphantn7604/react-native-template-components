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
      label="TextInput"
      placeholder="Placeholder"
      placeholderTextColor="gray"
      focusColor="blue"
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
    paddingLeft: 16,
    paddingRight: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 16,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});
