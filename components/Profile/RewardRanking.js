// components/Profile/RewardRanking.js (Ranking & Rewards im Profil, Leaderboard-Style)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';
// import { fetchLeaderboard } from '../../utils/rewards';

export default function RewardRanking() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // fetchLeaderboard().then(setList);
    setList([
      { username: 'BeeFan', coins: 310, rank: 1, avatar: '/assets/avatar1.png' },
      { username: 'Buzzing', coins: 280, rank: 2, avatar: '/assets/avatar2.png' },
      { username: 'Dirk', coins: 250, rank: 3, avatar: '/assets/avatar3.png' },
    ]);
  }, []);

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>Ranking & Rewards</Text>
      <FlatList
        data={list}
        keyExtractor={item => item.username}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{item.username}</Text>
            <Text style={styles.coins}>{item.coins} <Image source={require('../../assets/coin.png')} style={styles.icon} /></Text>
            <Text style={styles.rank}>#{item.rank}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 22, padding: 19, margin: 17, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 9 },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  avatar: { width: 34, height: 34, borderRadius: 18, marginRight: 8 },
  name: { fontFamily: beezyFont.bold, color: colors.text, fontSize: 15, marginRight: 7, flex: 1 },
  coins: { fontFamily: beezyFont.bold, color: colors.primary, fontSize: 14, flexDirection: 'row', alignItems: 'center', marginRight: 7 },
  icon: { width: 17, height: 17, marginLeft: 3 },
  rank: { fontFamily: beezyFont.regular, color: colors.text, fontSize: 15 },
});
