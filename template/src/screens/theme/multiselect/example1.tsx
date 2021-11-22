import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { fontScale, scale } from 'react-native-utils-scale';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);

  return (
    <MultiSelect
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      search
      data={data}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={selected}
      onChange={item => {
        setSelected(item);
      }}
      renderLeftIcon={() => (
        <AntDesign
          style={styles.icon}
          color="black"
          name="Safety"
          size={scale(20)}
        />
      )}
      selectedStyle={styles.selectedStyle}
    />
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: scale(50),
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: scale(0.5),
  },
  placeholderStyle: {
    fontSize: fontScale(16),
  },
  selectedTextStyle: {
    fontSize: fontScale(14),
  },
  iconStyle: {
    width: scale(20),
    height: scale(20),
  },
  inputSearchStyle: {
    height: scale(40),
    fontSize: fontScale(16),
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: scale(12),
  },
});
