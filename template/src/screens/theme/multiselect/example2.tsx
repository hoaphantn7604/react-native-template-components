import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
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

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign
          style={styles.icon}
          color="black"
          name="Safety"
          size={scale(20)}
        />
      </View>
    );
  };

  return (
    <MultiSelect
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      value={selected}
      search
      searchPlaceholder="Search..."
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
      renderItem={renderItem}
      renderSelectedItem={(item, unSelect) => (
        <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
          <View style={styles.selectedStyle}>
            <Text style={styles.textSelectedStyle}>{item.label}</Text>
            <AntDesign color="black" name="delete" size={scale(17)} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: scale(32),
    height: scale(50),
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
    marginRight: scale(5),
  },
  item: {
    padding: scale(17),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(14),
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: scale(8),
    marginRight: scale(12),
    paddingHorizontal: scale(12),
    paddingVertical: scale(8),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: scale(5),
    fontSize: fontScale(16),
  },
});
