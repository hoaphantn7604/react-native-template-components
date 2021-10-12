import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-utils-scale';
import { Avatar } from 'react-native-element-image';

const img_avatar = require('assets/images/icons/ic-avatar.png');

export interface Props {
  name: string;
}

const AvatarScreen: React.FC<Props> = _props => {
  return (
    <View style={styles.container}>
      <Avatar
        size={80}
        containerStyle={styles.avatar}
        source={img_avatar}
        iconEnable={false}
        onPressIcon={() => Alert.alert('Click')}
        nameStyle={{ fontSize: scale(20) }}
      />

      <Avatar
        size={80}
        containerStyle={styles.avatar}
        source={img_avatar}
        iconEnable
        onPressIcon={() => Alert.alert('Click')}
        nameStyle={{ fontSize: scale(20) }}
      />

      <Avatar
        size={100}
        containerStyle={styles.avatar}
        source={img_avatar}
        iconEnable
        onPressIcon={() => Alert.alert('Click')}
        name="User name"
        nameStyle={{ fontSize: scale(20) }}
      />

      <Avatar
        size={150}
        containerStyle={styles.avatar}
        source={img_avatar}
        iconEnable
        onPressIcon={() => Alert.alert('click')}
        name="User name"
        nameStyle={{ fontSize: scale(30) }}
      />
    </View>
  );
};

export default AvatarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: scale(20),
  },
  avatar: { marginTop: scale(10) },
});
