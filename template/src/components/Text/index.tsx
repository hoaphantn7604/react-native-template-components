import { COLORS } from '@config';
import React from 'react';
import { Text } from 'react-native';
import { scale } from 'react-native-size-scaling';
import { PropsText } from './model';

const defaultProps = {
  style: {},
  fontSize: undefined,
  bold: false,
  color: undefined,
};

const TextComponent: PropsText = props => {
  const { fontSize, bold, color, style, children } = props;

  let FONTSIZE: number = 14;
  if (fontSize) {
    FONTSIZE = fontSize;
  }

  return (
    <Text
      {...props}
      style={[
        {
          fontSize: scale(FONTSIZE),
          color: !color ? COLORS.TEXT : color,
        },
        bold && { fontWeight: 'bold' },
        style,
      ]}>
      {children}
    </Text>
  );
};

TextComponent.defaultProps = defaultProps;

export default TextComponent;
