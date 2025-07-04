// components/Offers/FavoriteButton.js (Herz/Favorit für Offers)
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function FavoriteButton({ active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Image
        source={active ? require('../../assets/heart_full.png') : require('../../assets/heart.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: { padding: 8 },
  icon: { width: 29, height: 29 },
});
