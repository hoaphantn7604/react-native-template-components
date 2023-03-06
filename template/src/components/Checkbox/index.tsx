import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View, Image} from 'react-native';
import {CheckboxProps} from './model';
import {scale} from 'react-native-size-scaling';
import {styles} from './styles';
import Text from '../Text';

const checkbox_check = require('./icon/checkbox-check.png');
const checkbox_uncheck = require('./icon/checkbox-uncheck.png');
const radio_check = require('./icon/radio-check.png');
const radio_uncheck = require('./icon/radio-uncheck.png');

const CheckComponent: CheckboxProps = props => {
  const {
    style,
    size = 25,
    type = 'checkbox',
    color = 'black',
    check = false,
    label,
    labelStyle,
    fontFamily,
    onPress = () => {},
  } = props;

  const [value, setValue] = useState<boolean>(check);

  useEffect(() => {
    if (check) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [check]);

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  };

  const onClick = () => {
    setValue(!value);
    if (onPress) {
      onPress(!value);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[style ? style : styles.container]}>
        <Image
          style={{
            width: scale(size),
            height: scale(size),
            tintColor: color,
          }}
          source={
            type === 'checkbox'
              ? value
                ? checkbox_check
                : checkbox_uncheck
              : value
              ? radio_check
              : radio_uncheck
          }
        />
        {label && (
          <Text
            style={[
              styles.text,
              {fontSize: scale(size - scale(5)), color: color},
              labelStyle,
              font(),
            ]}>
            {label}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckComponent;
