import React, { useState } from 'react';
import { View } from 'react-native';
import { AutoComplete } from 'react-native-element-textinput';
import { StyleSheet } from 'react-native-size-scaling';

const TextInputComponent = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <AutoComplete
        value={value}
        data={['hello', 'how are you', 'complete']}
        style={styles.input}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderStyle={styles.placeholderStyle}
        textErrorStyle={styles.textErrorStyle}
        label="Auto Complete"
        placeholder="Placeholder..."
        placeholderTextColor="gray"
        onChangeText={e => {
          setValue(e);
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
