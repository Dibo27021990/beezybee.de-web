// components/Offers/CompanybeeCard.js (Card für Firmenauftrag)
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function CompanybeeCard({ item }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => {/* Detail anzeigen */}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.info}>{item.company} • {item.price} €/h • {item.location}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: 18, padding: 17, marginBottom: 13, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 17, color: colors.primary },
  desc: { fontFamily: beezyFont.regular, fontSize: 14, color: colors.text, marginTop: 2, marginBottom: 6 },
  info: { fontFamily: beezyFont.regular, color: colors.text, opacity: 0.7 },
});
