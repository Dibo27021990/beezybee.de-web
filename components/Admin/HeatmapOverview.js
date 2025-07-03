// components/Admin/HeatmapOverview.js (Admin-Heatmap für Warteliste/Anfragen – Placeholder für künftige Erweiterung)
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function HeatmapOverview() {
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>Heatmap (Demo)</Text>
      <Image source={require('../../assets/heatmap.png')} style={styles.img} />
      <Text style={styles.info}>Hier siehst du, wo die meisten Anfragen eingehen!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 18, padding: 18, margin: 18, alignItems: 'center' },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 11 },
  img: { width: 210, height: 130, borderRadius: 16, marginVertical: 10 },
  info: { fontFamily: beezyFont.regular, color: colors.text, fontSize: 14, opacity: 0.8 },
});
