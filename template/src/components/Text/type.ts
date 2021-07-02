import React from 'react';
import { TextProps, TextStyle } from 'react-native';
interface Props extends TextProps {
  fontSize?: number | undefined;
  bold?: boolean;
  color?: string | undefined;
  style?: TextStyle | TextStyle[];
  onPress?: () => void;
}

export type PropsText = React.FC<Props>;
