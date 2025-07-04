// components/Common/SuccessScreen.js (Registrierung, Auftrag, Leihobjekt etc. erfolgreich)
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function SuccessScreen({ text }) {
  return (
    <View style={styles.bg}>
      <Image source={require('../../assets/bee_success.png')} style={styles.img} />
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#fff9dd' },
  img: { width: 82, height: 82, marginBottom: 22, opacity: 0.89 },
  txt: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 19, textAlign: 'center', marginHorizontal: 33 },
});
