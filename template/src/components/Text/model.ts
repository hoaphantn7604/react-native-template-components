import React from 'react';
import {TextProps as RNTextProps} from 'react-native';

interface IProps extends RNTextProps {
  fontSize?: number | undefined;
  bold?: boolean;
  color?: string | undefined;
}

export type TextProps = React.FC<IProps>;
