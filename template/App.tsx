import React from 'react';
import { View, LogBox, StatusBar } from 'react-native';
import AppWithNavigationState from 'navigators';

LogBox.ignoreAllLogs(true);
StatusBar.setBarStyle('dark-content');
const MyBase = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppWithNavigationState />
    </View>
  );
};
export default MyBase;
