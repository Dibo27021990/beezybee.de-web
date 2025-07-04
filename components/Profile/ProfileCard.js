// components/Profile/ProfileCard.js (User-Profil, clean und auffällig)
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function ProfileCard({ user }) {
  return (
    <View style={styles.bg}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.username}</Text>
      <Text style={styles.desc}>{user.bio}</Text>
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Image source={require('../../assets/coin.png')} style={styles.icon} />
          <Text style={styles.statText}>{user.coins}</Text>
        </View>
        <View style={styles.stat}>
          <Image source={require('../../assets/ranking.png')} style={styles.icon} />
          <Text style={styles.statText}>{user.rank}</Text>
        </View>
        <View style={styles.stat}>
          <Image source={require('../../assets/heart_full.png')} style={styles.icon} />
          <Text style={styles.statText}>{user.favorites?.length || 0}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 22, padding: 21, alignItems: 'center', margin: 17, ...colors.cardShadow },
  avatar: { width: 88, height: 88, borderRadius: 44, marginBottom: 11, backgroundColor: '#fff9dd' },
  name: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 4 },
  desc: { fontFamily: beezyFont.regular, fontSize: 14, color: colors.text, marginBottom: 10, textAlign: 'center' },
  statsRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 7 },
  stat: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 },
  icon: { width: 23, height: 23, marginRight: 4 },
  statText: { fontFamily: beezyFont.bold, color: colors.text, fontSize: 16 },
});
