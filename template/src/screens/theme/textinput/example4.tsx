import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HashtagInput } from 'react-native-element-textinput';

const TextInputComponent = props => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <HashtagInput
      data={value}
      style={styles.input}
      inputStyle={styles.inputStyle}
      labelStyle={styles.labelStyle}
      placeholderStyle={styles.placeholderStyle}
      textErrorStyle={styles.textErrorStyle}
      hashtagStyle={styles.hashtagStyle}
      hashtagTextStyle={styles.hashtagTextStyle}
      placeholder="Hashtag..."
      placeholderTextColor="gray"
      onChangeValue={value => {
        setValue(value);
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
  hashtagStyle: {
    borderWidth: 0,
    borderRadius: 16,
    padding: 8,
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
  hashtagTextStyle: {
    fontSize: 16,
  },
});
