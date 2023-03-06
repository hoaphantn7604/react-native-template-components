import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalLoading, globalMessage, Modal, Text} from '@components';
import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from 'react-native-element-image';
import {scale} from 'react-native-size-scaling';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {IMAGES} from '@assets/images';

interface IProps {}

const SettingScreen: React.FC<IProps> = _props => {
  const [visible, setVisible] = useState<boolean>(false);
  const {navigate} = useNavigation<StackNavigationProp<any>>();

  const itemMenu = (icon: string, name: string, onPress: () => void) => {
    return (
      <TouchableOpacity style={styles.rowMenu} onPress={onPress}>
        <AntDesign name={icon} size={scale(22)} />
        <Text style={styles.textMenu} bold fontSize={16}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        imageStyle={styles.imgBackground}
        source={IMAGES.avatarProfile}>
        <Avatar
          source={IMAGES.avatar}
          size={scale(120)}
          containerStyle={styles.wrap}
          iconEnable
          onPressIcon={() => Alert.alert('Click')}
          nameStyle={styles.name}
          name="User Name"
        />
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapMenu}>
          {itemMenu('iconfontdesktop', 'Checkbox Tree', () => {
            navigate('CheckboxTree');
          })}
          {itemMenu('iconfontdesktop', 'Dropdown', () => {
            navigate('Dropdown');
          })}
          {itemMenu('iconfontdesktop', 'Multi Select', () => {
            navigate('MultiSelect');
          })}
          {itemMenu('iconfontdesktop', 'TextInput', () => {
            navigate('TextInput');
          })}
          {itemMenu('iconfontdesktop', 'Avatar', () => {
            navigate('Avatar');
          })}
          {itemMenu('iconfontdesktop', 'Checkbox', () => {
            navigate('Checkbox');
          })}
          {itemMenu('iconfontdesktop', 'Swipe View', () => {
            navigate('SwipeView');
          })}
          {itemMenu('iconfontdesktop', 'Timer', () => {
            navigate('Timer');
          })}
          {itemMenu('iconfontdesktop', 'Countdown', () => {
            navigate('Countdown');
          })}
          {itemMenu('iconfontdesktop', 'Global Loading', () => {
            globalLoading.show();
            setTimeout(() => {
              globalLoading.hide();
            }, 1000);
          })}
          {itemMenu('iconfontdesktop', 'Global Message', () => {
            globalMessage.show('Title', 'Message');
          })}
          {itemMenu('iconfontdesktop', 'Modal', () => {
            setVisible(true);
          })}
        </View>
      </ScrollView>
      <Modal
        visible={visible}
        transparent
        maxHeight={500}
        onRequestClose={() => setVisible(false)}
      />
    </SafeAreaView>
  );
};

export default SettingScreen;
