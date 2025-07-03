// components/Common/TrustBadges.js (Badges für Verifizierung, Firmen, Video-ID, Versicherung, etc.)
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BADGES = [
  { icon: require('../../assets/badge_video.png'), label: 'Trust Video-ID' },
  { icon: require('../../assets/badge_company.png'), label: 'Verifizierte Firma' },
  { icon: require('../../assets/badge_insurance.png'), label: 'Versichert' },
  { icon: require('../../assets/badge_5star.png'), label: '5★ Top-Bewertungen' },
];

export default function TrustBadges({ badges = [0, 2, 3] }) {
  return (
    <View style={styles.row}>
      {badges.map(i => (
        <View key={i} style={styles.badge}>
          <Image source={BADGES[i].icon} style={styles.icon} />
          <Text style={styles.label}>{BADGES[i].label}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 9, marginVertical: 9 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fffcf0', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 },
  icon: { width: 22, height: 22, marginRight: 6 },
  label: { fontSize: 13, fontWeight: '600', color: '#A68D1D' },
});
