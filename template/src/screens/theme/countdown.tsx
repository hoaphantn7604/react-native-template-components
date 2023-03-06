import React, {useRef} from 'react';
import {View} from 'react-native';
import {Countdown} from 'react-native-element-timer';
import {Button} from '@components';
import {scale, StyleSheet} from 'react-native-size-scaling';
import {ICountdownRef} from 'react-native-element-timer/lib/typescript/CountDown/model';

export interface IProps {}

const CountdownScreen: React.FC<IProps> = _props => {
  const countdownRef = useRef<ICountdownRef>();

  return (
    <View style={styles.container}>
      <Countdown
        ref={countdownRef}
        style={styles.timer}
        textStyle={styles.timerText}
        initialSeconds={60}
        onTimes={() => {}}
        onEnd={() => {}}
      />
      <Button
        style={styles.button}
        title={'Start'}
        border
        onPress={() => {
          countdownRef?.current?.start();
        }}
      />
      <Button
        style={styles.button}
        title={'Pause'}
        border
        onPress={() => {
          countdownRef?.current?.pause();
        }}
      />
      <Button
        style={styles.button}
        title={'Resume'}
        border
        onPress={() => {
          countdownRef?.current?.resume();
        }}
      />
      <Button
        style={styles.button}
        title={'Stop'}
        border
        onPress={() => {
          countdownRef?.current?.stop();
        }}
      />
    </View>
  );
};

export default CountdownScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: scale(20),
  },
  timer: {
    marginVertical: scale(20),
  },
  timerText: {
    fontSize: scale(22),
  },
  button: {
    marginVertical: scale(5),
    backgroundColor: 'white',
    borderRadius: scale(24),
    width: scale(100),
  },
});
