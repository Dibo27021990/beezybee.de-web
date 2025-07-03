// components/Common/SuccessConfetti.js (Einfaches Confetti nach Registrierung, UX-WOW)
import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CONFETTI_COLORS = ['#FFE066', '#F4EEB1', '#FFFCF0', '#FFD700', '#FFB300'];

function randomX() { return Math.random() * (width - 20); }
function randomColor() { return CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]; }

export default function SuccessConfetti({ visible }) {
  if (!visible) return null;
  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {[...Array(25)].map((_, i) => (
        <Animated.View
          key={i}
          style={{
            position: 'absolute',
            top: Math.random() * 200,
            left: randomX(),
            width: 12, height: 12, borderRadius: 6,
            backgroundColor: randomColor(),
            opacity: 0.8,
            transform: [{ rotate: `${Math.random() * 360}deg` }]
          }}
        />
      ))}
    </View>
  );
}
