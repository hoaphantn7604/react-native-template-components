import React from 'react';
import { Alert, Animated, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { scale } from 'react-native-size-scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from 'screens/home';
import SettingScreen from 'screens/setting';
import { styles } from './styles';

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
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
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

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        height={scale(55)}
        circleWidth={scale(55)}
        bgColor="white"
        initialRouteName="title1"
        renderCircle={() => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => Alert.alert('Click Action')}>
              <Ionicons name={'apps-sharp'} color="gray" size={scale(25)} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="title1"
          position="LEFT"
          component={() => <HomeScreen />}
        />
        <CurvedBottomBar.Screen
          options={{ headerShown: false }}
          name="title2"
          component={() => <SettingScreen />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};
