// components/Offers/BorrowbeeCard.js (Card für ein Leihobjekt)
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function BorrowbeeCard({ item }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => {/* Detail anzeigen */}}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <View style={{ flex: 1, marginLeft: 11 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.info}>{item.price} €/Tag • {item.location}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: colors.card, borderRadius: 18, padding: 11, marginBottom: 13, ...colors.cardShadow },
  img: { width: 64, height: 64, borderRadius: 13, backgroundColor: '#f4eeb1' },
  title: { fontFamily: beezyFont.bold, fontSize: 16, color: colors.primary },
  desc: { fontFamily: beezyFont.regular, fontSize: 13, color: colors.text, marginVertical: 3 },
  info: { fontFamily: beezyFont.regular, color: colors.text, opacity: 0.7 },
});
