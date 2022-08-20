import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { StyleSheet } from 'react-native-size-scaling';

const TextInputComponent = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});
