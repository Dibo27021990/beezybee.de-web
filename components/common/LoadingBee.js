// components/Common/LoadingBee.js (Animiertes Lade-Icon, überall im Style der App)
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet } from 'react-native';

export default function LoadingBee({ size = 46 }) {
  const rotate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1, duration: 1500, easing: Easing.linear, useNativeDriver: true,
      })
    ).start();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          { rotate: rotate.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }
        ]
      }}>
      <Image source={require('../../assets/bee.png')} style={{ width: size, height: size }} />
    </Animated.View>
  );
}
