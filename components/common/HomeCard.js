// components/Home/HomeCard.js (Starke Homecard mit optischem Highlight und CTA)
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function HomeCard({ onRegister }) {
  const { t } = useTranslation();
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/home.png')} style={styles.img} />
      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text style={styles.title}>{t('homecard.title')}</Text>
        <Text style={styles.text}>{t('homecard.text')}</Text>
        <TouchableOpacity style={styles.btn} onPress={onRegister}>
          <Text style={styles.btnTxt}>{t('homecard.register')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: 26, padding: 17, margin: 17, ...colors.cardShadow },
  img: { width: 70, height: 70, borderRadius: 13 },
  title: { fontFamily: beezyFont.bold, fontSize: 22, color: colors.primary, marginBottom: 7 },
  text: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text, marginBottom: 14 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 10, paddingHorizontal: 29 },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 15 },
});
