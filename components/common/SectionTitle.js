// components/Common/SectionTitle.js (Optische Headline für Cards, HowTo, etc.)
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function SectionTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 20, marginVertical: 11, textAlign: 'center' },
});
