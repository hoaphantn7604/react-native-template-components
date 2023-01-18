import React from 'react';
import {ImageURISource} from 'react-native';

export interface IProps {
  name?: string;
  avatar?: ImageURISource;
  onPressUser?: () => void;
  onChangeText?: (value: string) => void;
}

export type HeaderProps = React.FC<IProps>;
