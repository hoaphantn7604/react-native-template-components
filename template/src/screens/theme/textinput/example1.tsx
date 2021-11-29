import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { fontScale, scale } from 'react-native-utils-scale';

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
    padding: scale(16),
  },
  input: {
    height: scale(55),
    paddingHorizontal: scale(12),
    borderRadius: scale(8),
    borderWidth: scale(0.5),
    borderColor: '#DDDDDD',
  },
  inputStyle: { fontSize: fontScale(16) },
  labelStyle: {
    fontSize: fontScale(14),
    position: 'absolute',
    top: fontScale(-10),
    backgroundColor: 'white',
    paddingHorizontal: scale(4),
    marginLeft: scale(-4),
  },
  placeholderStyle: { fontSize: fontScale(16) },
  textErrorStyle: { fontSize: fontScale(16) },
});
