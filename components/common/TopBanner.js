// components/Common/TopBanner.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function TopBanner() {
  const { t } = useTranslation();
  return (
    <View style={styles.banner}>
      <Image source={require('../../assets/banner.png')} style={styles.img} />
      <View>
        <Text style={styles.title}>{t('banner.title')}</Text>
        <Text style={styles.subtitle}>{t('banner.subtitle')}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: 26,
    padding: 17, margin: 17, marginTop: 0, ...colors.cardShadow,
  },
  img: { width: 68, height: 68, marginRight: 18, borderRadius: 12 },
  title: { fontFamily: beezyFont.bold, fontSize: 20, color: colors.primary, marginBottom: 3 },
  subtitle: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text },
});
