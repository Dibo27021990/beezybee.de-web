// components/Common/ComingSoon.js (Für Features, die bald live gehen)
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function ComingSoon({ text }) {
  return (
    <View style={styles.bg}>
      <Image source={require('../../assets/bee.png')} style={styles.img} />
      <Text style={styles.txt}>{text || 'Kommt bald!'}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { alignItems: 'center', padding: 34, marginTop: 33 },
  img: { width: 59, height: 59, marginBottom: 17, opacity: 0.88 },
  txt: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 16, textAlign: 'center' },
});
