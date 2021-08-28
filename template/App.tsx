import React from 'react';
import { View, LogBox, StatusBar } from 'react-native';
import AppWithNavigationState from 'navigators';
import GlobalLoading, { globalLoadingRef } from 'components/GlobalLoading';
import GlobalMessage, { globalMessageRef } from 'components/GlobalMessage';

LogBox.ignoreAllLogs(true);
StatusBar.setBarStyle('dark-content');
const MyBase = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppWithNavigationState />
      <GlobalLoading ref={globalLoadingRef} />
      <GlobalMessage ref={globalMessageRef} />
    </View>
  );
};
export default MyBase;
