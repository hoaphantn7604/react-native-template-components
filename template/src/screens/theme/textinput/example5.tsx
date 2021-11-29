import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TagsInput } from 'react-native-element-textinput';
import { fontScale, scale } from 'react-native-utils-scale';

const TextInputComponent = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <TagsInput
        data={value}
        style={styles.input}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderStyle={styles.placeholderStyle}
        textErrorStyle={styles.textErrorStyle}
        tagsStyle={styles.tagsStyle}
        tagsTextStyle={styles.tagsTextStyle}
        label="TagsInput"
        placeholder="Tags..."
        placeholderTextColor="gray"
        onChangeValue={value => {
          setValue(value);
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
    paddingHorizontal: scale(12),
    borderRadius: scale(8),
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
  inputStyle: {
    fontSize: fontScale(16),
    minWidth: scale(80),
  },
  labelStyle: {
    fontSize: fontScale(14),
    position: 'absolute',
    top: scale(-10),
    backgroundColor: 'white',
    paddingHorizontal: scale(4),
    marginLeft: scale(-4),
  },
  placeholderStyle: { fontSize: fontScale(16) },
  textErrorStyle: { fontSize: fontScale(16) },
  tagsStyle: {
    borderWidth: 0,
    borderRadius: scale(16),
    padding: scale(8),
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
  tagsTextStyle: {
    fontSize: fontScale(16),
  },
});
