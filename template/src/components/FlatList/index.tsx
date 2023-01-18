import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {FlatlistProps} from './model';

const FlatListComponent: FlatlistProps = props => {
  const {data, keyExtractorField, renderItem, onRefresh, onLoadMore} = props;
  return (
    <FlatList
      {...props}
      data={data}
      keyExtractor={e => e[keyExtractorField].toString()}
      extraData={data}
      keyboardShouldPersistTaps="handled"
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            onRefresh && onRefresh();
          }}
        />
      }
      onEndReachedThreshold={0.5}
      onEndReached={() => onLoadMore && onLoadMore()}
    />
  );
};

export default FlatListComponent;
