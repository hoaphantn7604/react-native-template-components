import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {
  TextInput,
  HashtagInput,
  AutoComplete,
} from 'react-native-element-textinput';
import { fontScale, scale } from 'react-native-utils-scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TextInputScreen = _props => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [hashtag, setHashtag] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          value={value1}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Normal"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            setValue1(text);
          }}
          focusColor="red"
          textError={value1.length === 0 ? 'Please enter' : ''}
        />

        <TextInput
          value={value2}
          style={styles.input1}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            setValue2(text);
          }}
          focusColor="red"
          textError={value2.length === 0 ? 'Please enter' : ''}
          renderLeftIcon={() => (
            <MaterialIcons
              style={{ marginRight: scale(8) }}
              name="group-add"
              size={scale(20)}
            />
          )}
        />

        <TextInput
          value={value3}
          style={styles.input2}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Password"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          secureTextEntry
          focusColor="red"
          onChangeText={text => {
            setValue3(text);
          }}
        />

        <HashtagInput
          style={styles.input3}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          data={hashtag}
          onChangeValue={e => {
            setHashtag(e);
          }}
          placeholder="Hashtag..."
          autoCorrect={false}
          placeholderTextColor="gray"
          focusColor="red"
          renderLeftIcon={() => (
            <MaterialIcons
              style={{ marginRight: scale(8) }}
              name="group-add"
              color="gray"
              size={scale(22)}
            />
          )}
        />

        <AutoComplete
          style={styles.input3}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          data={['hello', 'how are you', 'complete']}
          placeholder="AutoComplete..."
          autoCorrect={false}
          placeholderTextColor="gray"
          focusColor="red"
          onChangeText={e => {}}
          renderLeftIcon={() => (
            <MaterialIcons
              style={{ marginRight: scale(8) }}
              name="group-add"
              color="gray"
              size={scale(22)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  input: {
    marginTop: scale(20),
    borderBottomWidth: scale(0.4),
    height: scale(55),
  },
  input1: {
    marginTop: scale(20),
    borderWidth: scale(0.4),
    height: scale(55),
    paddingHorizontal: scale(8),
    borderRadius: scale(8),
  },
  input2: {
    marginTop: scale(20),
    height: scale(55),
    paddingHorizontal: scale(16),
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
  input3: {
    marginTop: scale(20),
    height: scale(60),
    paddingHorizontal: scale(8),
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
  inputStyle: { fontSize: fontScale(16) },
  labelStyle: { fontSize: fontScale(14) },
  placeholderStyle: { fontSize: fontScale(16) },
  textErrorStyle: { fontSize: fontScale(16) },
});
