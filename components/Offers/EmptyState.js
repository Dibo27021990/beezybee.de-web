// components/Common/EmptyState.js (Leerer Zustand – keine Aufträge/Objekte gefunden)
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function EmptyState({ text }) {
  return (
    <View style={styles.bg}>
      <Image source={require('../../assets/bee_sad.png')} style={styles.img} />
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { alignItems: 'center', padding: 27, marginTop: 33 },
  img: { width: 59, height: 59, marginBottom: 17, opacity: 0.82 },
  txt: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 16, textAlign: 'center' },
});
