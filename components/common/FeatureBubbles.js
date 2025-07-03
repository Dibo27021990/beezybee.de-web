// components/Common/FeatureBubbles.js (Drei animierte USP-Bubbles auf Home!)
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FEATURES = [
  { icon: require('../../assets/flash.png'), label: 'Soforthilfe & Leihen' },
  { icon: require('../../assets/coin.png'), label: 'Beecoins & Rewards' },
  { icon: require('../../assets/shield.png'), label: 'Rechtssicher & Fair' },
];

export default function FeatureBubbles() {
  return (
    <View style={styles.row}>
      {FEATURES.map((f, i) => (
        <View key={i} style={styles.bubble}>
          <Image source={f.icon} style={styles.icon} />
          <Text style={styles.label}>{f.label}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 17 },
  bubble: { backgroundColor: '#FFFCF0', borderRadius: 17, alignItems: 'center', padding: 11, width: 100, shadowColor: '#f4eeb1', shadowOpacity: 0.16, shadowRadius: 11, elevation: 3 },
  icon: { width: 34, height: 34, marginBottom: 5 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#c8a30f', textAlign: 'center' },
});
