import React from 'react';
import { TextProps } from 'react-native';
interface Props extends TextProps {
  fontSize?: number | undefined;
  bold?: boolean;
  color?: string | undefined;
}

export type PropsText = React.FC<Props>;
