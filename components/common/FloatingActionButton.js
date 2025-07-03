// components/Common/FloatingActionButton.js (zentraler, stylischer Plus-Button für Anfrage)
import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { colors } from '../../styles/theme';

export default function FloatingActionButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress} activeOpacity={0.83}>
      <View style={styles.inner}>
        <Image source={require('../../assets/plus.png')} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute', bottom: 34, alignSelf: 'center', zIndex: 99,
    elevation: 6, shadowColor: colors.primary, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.28, shadowRadius: 15,
  },
  inner: { backgroundColor: colors.primary, borderRadius: 60, width: 64, height: 64, alignItems: 'center', justifyContent: 'center' },
  icon: { width: 36, height: 36, tintColor: '#fff' },
});
