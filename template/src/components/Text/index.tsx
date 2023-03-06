import {COLORS} from '@config';
import React from 'react';
import {Text} from 'react-native';
import {scale} from 'react-native-size-scaling';
import {TextProps} from './model';

const TextComponent: TextProps = props => {
  const {fontSize, bold = false, color, style, children} = props;

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
        bold && {fontWeight: 'bold'},
        style,
      ]}>
      {children}
    </Text>
  );
};

export default TextComponent;
