import React from 'react';
import {TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-scaling';
import {styles} from './styles';
import {ButtonProps} from './model';
import Text from '../Text';
import {COLORS} from '@config';

const ButtonComponent: ButtonProps = props => {
  const {
    fontSize,
    bgColor,
    style,
    textColor,
    title,
    onPress = () => {},
    border = false,
  } = props;
  if (border) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            borderColor: textColor === '' ? COLORS.BUTTON_TEXT : textColor,
            borderWidth: scale(0.4),
          },
          style,
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: textColor === '' ? COLORS.BUTTON_TEXT : textColor,
            },
            fontSize && {fontSize: scale(fontSize)},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: bgColor === '' ? COLORS.BUTTON : bgColor},
        style,
      ]}>
      <Text
        style={[
          styles.text,
          {color: textColor === '' ? COLORS.BUTTON_TEXT : textColor},
          fontSize && {fontSize: scale(fontSize)},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
