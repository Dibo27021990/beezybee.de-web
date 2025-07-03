// components/Common/AnimatedBee.js (Süße animierte Biene als Mini-Mascot auf jeder Screen!)
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';

export default function AnimatedBee({ size = 54 }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, { toValue: 1, duration: 1300, useNativeDriver: true }),
        Animated.timing(anim, { toValue: 0, duration: 1300, useNativeDriver: true }),
      ])
    ).start();
  }, []);
  return (
    <Animated.View style={{
      transform: [
        { translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [0, -14] }) },
        { rotate: anim.interpolate({ inputRange: [0, 1], outputRange: ['-9deg', '9deg'] }) },
      ]
    }}>
      <Image
        source={require('../../assets/bee.png')}
        style={{ width: size, height: size, resizeMode: 'contain' }}
      />
    </Animated.View>
  );
}
