// components/Common/UserStatsCard.js (Profil-Karte: Coins, Rang, Bewertungen, Aufträge, für App & Web)
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function UserStatsCard({ coins = 0, rank = 1, jobs = 0, rating = 4.8 }) {
  return (
    <View style={styles.bg}>
      <View style={styles.row}>
        <Image source={require('../../assets/coin.png')} style={styles.icon} />
        <Text style={styles.stat}>{coins}</Text>
        <Text style={styles.label}>Beecoins</Text>
        <Text style={styles.sep}>|</Text>
        <Image source={require('../../assets/ranking.png')} style={styles.icon} />
        <Text style={styles.stat}>{rank}</Text>
        <Text style={styles.label}>Rang</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Jobs: {jobs}</Text>
        <Text style={styles.label}>⭐ {rating}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 21, padding: 16, alignItems: 'center', margin: 15, ...colors.cardShadow },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, justifyContent: 'center' },
  icon: { width: 24, height: 24, marginRight: 6 },
  stat: { fontFamily: beezyFont.bold, color: colors.primary, fontSize: 18, marginHorizontal: 3 },
  label: { fontFamily: beezyFont.regular, color: colors.text, fontSize: 14, marginHorizontal: 3 },
  sep: { fontSize: 18, color: '#EEE', marginHorizontal: 8 },
});
