import { COLORS } from 'config';
import React from 'react';
import { Animated, StatusBar, TouchableOpacity, View, Alert } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { useScale } from 'react-native-utils-toolkit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from 'screens/home';
import { styles } from './styles';

const { scale } = useScale;

export interface Props {}

const defaultProps = {
  appName: 'Wellcome hooks',
};

StatusBar.setBarStyle('dark-content');
const MainScreen: React.FC<Props> = _props => {
  const _renderIcon = (routeName: string, selectTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'apps-outline';
        break;
      case 'title3':
        icon = 'bar-chart-outline';
        break;
      case 'title4':
        icon = 'person-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={scale(25)}
        color={routeName === selectTab ? COLORS.PRIMARY : 'gray'}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={{ backgroundColor: '#F5F5F5' }}
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
              onPress={() => Alert.alert('Click Button!')}>
              <Ionicons name={'chatbubbles-outline'} size={scale(25)} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={({ routeName, selectTab, navigation }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation(routeName)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {_renderIcon(routeName, selectTab)}
            </TouchableOpacity>
          );
        }}>
        <CurvedBottomBar.Screen
          name="title1"
          position="left"
          component={() => <HomeScreen />}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={() => (
            <View
              style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1 }}
            />
          )}
          position="left"
        />
        <CurvedBottomBar.Screen
          name="title3"
          component={() => (
            <View
              style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1 }}
            />
          )}
          position="right"
        />
        <CurvedBottomBar.Screen
          name="title4"
          component={() => (
            <View
              style={{ backgroundColor: COLORS.BACKGROUND_COLOR, flex: 1 }}
            />
          )}
          position="right"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

MainScreen.defaultProps = defaultProps;

export default MainScreen;
