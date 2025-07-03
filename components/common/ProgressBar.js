// components/Common/ProgressBar.js (Für HowTo, Steps, Belohnungen etc.)
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

export default function ProgressBar({ progress = 0 }) {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }]} />
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { width: '100%', height: 9, borderRadius: 5, backgroundColor: colors.border, marginVertical: 7 },
  fg: { height: 9, borderRadius: 5, backgroundColor: colors.primary },
});
