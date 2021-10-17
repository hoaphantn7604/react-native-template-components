import { COLORS } from 'config';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MultiSelect } from 'react-native-element-dropdown';
import { scale } from 'react-native-utils-scale';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export interface Props {}

const MultiSelectScreen: React.FC<Props> = _props => {
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={selected}
        onChange={item => {
          setSelected(item);
          console.log('selected', item);
        }}
      />

      <MultiSelect
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={selected1}
        onChange={item => {
          setSelected1(item);
          console.log('selected', item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={scale(20)}
          />
        )}
      />

      <MultiSelect
        style={styles.dropdown2}
        search
        searchPlaceholder="Search"
        selectedStyle={styles.selectedStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconColor={COLORS.SECONDARY}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={selected2}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={COLORS.SECONDARY}
            name="Safety"
            size={scale(20)}
          />
        )}
        onChange={item => {
          setSelected2(item);
          console.log('selected', item);
        }}
      />
    </View>
  );
};

export default MultiSelectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  dropdown: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: scale(0.5),
    marginTop: scale(20),
  },
  dropdown2: {
    marginTop: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(12),
    padding: scale(12),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  selectedStyle: {
    backgroundColor: 'white',
    borderColor: '#DDDDDD',
  },
  selectedTextStyle: {
    color: 'gray',
  },
  icon: {
    marginRight: scale(5),
  },
  header: {
    height: scale(40),
    width: '100%',
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: scale(0.3),
    borderBottomColor: '#DDDDDD',
    backgroundColor: COLORS.SECONDARY,
  },
  pan: {
    width: scale(40),
    height: scale(6),
    borderRadius: scale(6),
    backgroundColor: 'white',
  },
});
