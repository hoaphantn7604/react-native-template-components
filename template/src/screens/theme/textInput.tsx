import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { fontScale, scale } from 'react-native-utils-scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface Props {}

const TextInputScreen: React.FC<Props> = _props => {
  const [hashtag, setHashtag] = useState<string[]>([]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Normal"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            console.log(text);
          }}
          focusColor="red"
          textError="Please enter"
        />

        <TextInput
          style={styles.input1}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          placeholder="Placeholder"
          placeholderTextColor="gray"
          onChangeText={text => {
            console.log(text);
          }}
          focusColor="red"
          textError="Please enter"
          renderLeftIcon={() => (
            <MaterialIcons
              style={{ marginRight: scale(8) }}
              name="favorite-outline"
              size={scale(20)}
            />
          )}
        />

        <TextInput
          style={styles.input2}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          label="Password"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          secureTextEntry
          focusColor="red"
          onChangeText={text => {
            console.log(text);
          }}
        />

        <TextInput
          style={styles.input3}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          textErrorStyle={styles.textErrorStyle}
          hashtagValue={hashtag}
          onChangeHashtag={e => {
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
    borderBottomWidth: scale(0.3),
    height: scale(60),
  },
  input1: {
    marginTop: scale(20),
    borderWidth: scale(0.3),
    height: scale(60),
    paddingHorizontal: scale(8),
    borderRadius: scale(8),
  },
  input2: {
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
  textErrorStyle: { fontSize: fontScale(16) },
});
