import React from 'react';
import { TouchableOpacity } from 'react-native';
import { scale } from 'react-native-utils-scale';
import { styles } from './styles';
import { ButtonProps } from './type';
import Text from '../Text';
import { COLORS } from 'config';

const defaultProps = {
  bgColor: '',
  style: {},
  textColor: '',
  fontSize: null,
  border: false,
  onPress: () => {},
};

const ButtonComponent: ButtonProps = props => {
  const {
    fontSize,
    bgColor,
    style,
    textColor,
    title,
    onPress,
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
            fontSize && { fontSize: scale(fontSize) },
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
        { backgroundColor: bgColor === '' ? COLORS.BUTTON : bgColor },
        style,
      ]}>
      <Text
        style={[
          styles.text,
          { color: textColor === '' ? COLORS.BUTTON_TEXT : textColor },
          fontSize && { fontSize: scale(fontSize) },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
