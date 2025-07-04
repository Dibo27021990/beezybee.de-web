// components/Common/AlertBar.js (Für Hinweise, Promotions, App-Warnungen)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function AlertBar({ text, type = "info" }) {
  const bg = type === 'info' ? '#F4EEB1' : type === 'warn' ? '#FFD6B1' : '#FFFCF0';
  const color = type === 'warn' ? '#E67800' : '#9C8500';
  return (
    <View style={[styles.bg, { backgroundColor: bg }]}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { borderRadius: 12, padding: 13, margin: 11, alignItems: 'center', elevation: 2 },
  text: { fontFamily: beezyFont.bold, fontSize: 15 },
});
