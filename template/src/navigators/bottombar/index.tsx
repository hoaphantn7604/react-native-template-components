import React from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {scale} from 'react-native-size-scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '@screens/home';
import SettingScreen from '@screens/setting';
import {styles} from './styles';

export const tabBar = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={scale(25)}
        color={routeName === selectedTab ? 'white' : '#8DEEEE'}
      />
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const linkChanelGithub = () => {
    Linking.openURL(
      'https://github.com/hoaphantn7604/react-native-template-components',
    );
  };

  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      height={55}
      circleWidth={50}
      bgColor="#79CDCD"
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={() => (
        <View style={styles.btnCircle}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
            onPress={linkChanelGithub}>
            <FontAwesome name={'github-alt'} color="white" size={scale(25)} />
          </TouchableOpacity>
        </View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        options={{headerShown: false}}
        name="title1"
        position="LEFT"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBar.Screen
        options={{headerShown: false}}
        name="title2"
        component={() => <SettingScreen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};
