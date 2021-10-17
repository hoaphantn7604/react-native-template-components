import { COLORS } from 'config';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
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

const local_data = [
  {
    value: '1',
    lable: 'Country 1',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '2',
    lable: 'Country 2',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '3',
    lable: 'Country 3',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '4',
    lable: 'Country 4',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '5',
    lable: 'Country 5',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '6',
    lable: 'Country 6',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '7',
    lable: 'Country 7',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '8',
    lable: 'Country 8',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
  {
    value: '9',
    lable: 'Country 9',
    image: {
      uri: 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png',
    },
  },
];

export interface Props {}

const DropdownScreen: React.FC<Props> = _props => {
  const [dropdown, setDropdown] = useState(null);
  const [dropdown1, setDropdown1] = useState(null);
  const [dropdown2, setDropdown2] = useState(null);
  const [country, setCountry] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={dropdown}
        onChange={item => {
          setDropdown(item.value);
          console.log('selected', item);
        }}
      />

      <View style={styles.wrap}>
        <Dropdown
          style={[styles.dropdown, { marginRight: scale(5) }]}
          data={data}
          search
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={dropdown1}
          onChange={item => {
            setDropdown1(item.value);
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

        <SelectCountry
          style={[styles.dropdown, { marginLeft: scale(5) }]}
          selectedTextStyle={styles.selectedText}
          search
          value={country}
          data={local_data}
          valueField="value"
          labelField="lable"
          imageField="image"
          placeholder="Select country"
          searchPlaceholder="Search..."
          onChange={e => {
            setCountry(e.value);
          }}
        />
      </View>

      <Dropdown
        style={styles.dropdown2}
        search
        searchPlaceholder="Search"
        iconColor={COLORS.SECONDARY}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={dropdown2}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={COLORS.SECONDARY}
            name="Safety"
            size={scale(20)}
          />
        )}
        onChange={item => {
          setDropdown2(item.value);
          console.log('selected', item);
        }}
      />
    </View>
  );
};

export default DropdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },
  wrap: {
    flexDirection: 'row',
  },
  dropdown: {
    flex: 1,
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
  selectedText: {
    marginLeft: scale(8),
  },
});
