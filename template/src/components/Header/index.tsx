import { Text } from 'components';
import React from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { scale } from 'react-native-size-scaling';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import { HeaderProps } from './model';

const HeaderComponent: HeaderProps = props => {
  const {
    name = 'Hoà Phan Dev',
    avatar = require('assets/images/icons/ic-avatar.png'),
    onPressUser,
    onChangeText,
  } = props;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => onPressUser && onPressUser()}>
        <View style={styles.wrapUser}>
          <View style={styles.wrapAvatar}>
            <Image style={styles.avatar} source={avatar} />
          </View>
          <Text style={styles.name} fontSize={18} bold>
            {name}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          inputStyle={{ fontSize: scale(16) }}
          labelStyle={{ fontSize: scale(18) }}
          textErrorStyle={{ fontSize: scale(16) }}
          onChangeText={onChangeText}
          placeholder="Search..."
          renderRightIcon={() => (
            <AntDesign
              style={{ marginRight: scale(4) }}
              name="search1"
              size={scale(18)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HeaderComponent;
