import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { fontScale } from 'react-native-utils-scale';
import { PropsText } from './type';
import { COLORS } from '../setup';

const defaultProps = {
  style: {},
  fontSize: undefined,
  bold: false,
  color: undefined,
};

const TextComponent: PropsText = props => {
  const { numberOfLines, onPress, fontSize, bold, color, style, children } =
    props;

  let FONTSIZE: number = 12;
  if (fontSize) {
    FONTSIZE = fontSize;
  }
  if (onPress) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Text
          {...props}
          style={[
            {
              fontSize: fontScale(FONTSIZE),
              color: !color ? COLORS.TEXT : color,
            },
            bold && { fontWeight: 'bold' },
            style,
          ]}
          numberOfLines={numberOfLines}>
          {children}
        </Text>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <Text
        {...props}
        style={[
          {
            fontSize: fontScale(FONTSIZE),
            color: !color ? COLORS.TEXT : color,
          },
          bold && { fontWeight: 'bold' },
          style,
        ]}
        numberOfLines={numberOfLines}>
        {children}
      </Text>
    );
  }
};

TextComponent.defaultProps = defaultProps;

export default TextComponent;
