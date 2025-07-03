// components/Common/BeezybeeDivider.js (Animierter Divider im Bee-Style)
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

export default function BeezybeeDivider() {
  // Animation könnte hier noch ergänzt werden!
  return <Animated.View style={styles.divider} />;
}
const styles = StyleSheet.create({
  divider: { height: 4, borderRadius: 5, backgroundColor: colors.primary, width: '88%', alignSelf: 'center', marginVertical: 15, opacity: 0.29 },
});
