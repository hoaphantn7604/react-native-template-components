import React from 'react';
import {SelectCountry} from 'react-native-element-dropdown';
import {scale} from 'react-native-size-scaling';
import {SelectLocal} from './model';
import {styles} from './styles';

const local_data = [
  {
    value: 'en',
    lable: 'EN',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: 'vi',
    lable: 'VI',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
];

const SelectLocalComponent: SelectLocal = props => {
  const {style, locale, onChange} = props;

  return (
    <SelectCountry
      style={[styles.dropdown, style]}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={scale(200)}
      value={locale}
      data={local_data}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={e => {
        onChange(e.value);
      }}
    />
  );
};

export default SelectLocalComponent;
