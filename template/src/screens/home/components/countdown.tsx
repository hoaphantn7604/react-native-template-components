import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Countdown, Button } from 'react-native-utils-components';
import { useScale } from 'react-native-utils-toolkit';

const { scale } = useScale;

export interface Props {
  name: string;
}

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
        onPress={() => {
          countdownRef.current.start();
        }}
      />
      <Button
        style={styles.button}
        title={'Pause'}
        onPress={() => {
          countdownRef.current.pause();
        }}
      />
      <Button
        style={styles.button}
        title={'Resume'}
        onPress={() => {
          countdownRef.current.resume();
        }}
      />
      <Button
        style={styles.button}
        title={'Stop'}
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
