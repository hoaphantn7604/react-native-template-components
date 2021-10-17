import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Countdown } from 'react-native-element-timer';
import { Button } from 'components';
import { scale } from 'react-native-utils-scale';

export interface Props {}

const CountdownScreen: React.FC<Props> = _props => {
  const countdownRef: any = useRef(null);

  return (
    <View style={styles.container}>
      <Countdown
        ref={countdownRef}
        style={styles.timer}
        textStyle={styles.timerText}
        seconds={5}
        onTimes={() => {}}
        onEnd={() => {}}
      />
      <Button
        style={styles.button}
        title={'Start'}
        border
        onPress={() => {
          countdownRef.current.start();
        }}
      />
      <Button
        style={styles.button}
        title={'Pause'}
        border
        onPress={() => {
          countdownRef.current.pause();
        }}
      />
      <Button
        style={styles.button}
        title={'Resume'}
        border
        onPress={() => {
          countdownRef.current.resume();
        }}
      />
      <Button
        style={styles.button}
        title={'Stop'}
        border
        onPress={() => {
          countdownRef.current.stop();
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
