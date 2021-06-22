import { COLORS } from 'config';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-utils-components';
import { useScale } from 'react-native-utils-toolkit';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { scale } = useScale;

export interface Props {
  name: string;
}

const TextInputScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <TextInput
        label="Normal"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        onChangeText={(text: string) => {
          console.log(text);
        }}
      />

      <TextInput
        style={styles.textinput}
        label="Password"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        secureTextEntry
        onChangeText={(text: string) => {
          console.log(text);
        }}
        textError="Error"
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="gray"
            name="unlock"
            size={scale(20)}
          />
        )}
        iconStyle={{ tintColor: 'gray' }}
      />

      <TextInput
        style={styles.textinput2}
        label="Currency"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        currency
        unitCurrency="$"
        onChangeText={(text: string) => {
          console.log(text);
        }}
      />

      <TextInput
        style={styles.textinput2}
        labelStyle={{ color: COLORS.SECONDARY }}
        iconStyle={{ tintColor: COLORS.SECONDARY }}
        inputStyle={{ color: COLORS.SECONDARY }}
        label="Numeric"
        placeholder="Placeholder"
        placeholderTextColor="gray"
        numeric
        onChangeText={(text: string) => {
          console.log(text);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={COLORS.SECONDARY}
            name="Safety"
            size={scale(20)}
          />
        )}
        textError="Error"
      />
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  textinput: {
    marginTop: scale(20),
    borderBottomWidth: scale(0.5),
    borderBottomColor: 'gray',
  },
  textinput2: {
    marginTop: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(8),
    padding: scale(12),
  },
  icon: {
    marginRight: scale(5),
  },
});
