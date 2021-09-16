import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { fontScale, scale } from 'react-native-utils-scale';

const TextInputScreen = _props => {
  const [hashtag, setHashtag] = useState<string[]>([]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={{ marginTop: scale(20) }}
          containerStyle={styles.textinput}
          inputStyle={{ fontSize: fontScale(16) }}
          labelStyle={{ fontSize: fontScale(18) }}
          textErrorStyle={{ fontSize: fontScale(16) }}
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
          style={{ marginTop: scale(20) }}
          containerStyle={styles.textinput}
          inputStyle={{ fontSize: fontScale(16) }}
          labelStyle={{ fontSize: fontScale(18) }}
          textErrorStyle={{ fontSize: fontScale(16) }}
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
          style={{ marginTop: scale(20) }}
          containerStyle={styles.textinput}
          inputStyle={{ fontSize: fontScale(16) }}
          labelStyle={{ fontSize: fontScale(18) }}
          textErrorStyle={{ fontSize: fontScale(16) }}
          hashtagValue={hashtag}
          onChangeHashtag={e => {
            setHashtag(e);
          }}
          label="Hashtag"
          placeholder="Hashtag..."
          autoCorrect={false}
          placeholderTextColor="gray"
          focusColor="red"
        />
      </View>
    </SafeAreaView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  textinput: {
    borderBottomWidth: scale(0.5),
    height: scale(50),
    borderBottomColor: 'gray',
  },
});
