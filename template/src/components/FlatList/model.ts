import React from 'react';
import { FlatListProps } from 'react-native';

interface Props extends FlatListProps<any> {
  onRefresh?: () => void;
  onLoadMore?: () => void;
}

export type PropsFlatlist = React.FC<Props>;
