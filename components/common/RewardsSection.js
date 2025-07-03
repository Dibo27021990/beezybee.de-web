// components/Common/RewardsSection.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function RewardsSection() {
  const { t } = useTranslation();
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('rewards.title')}</Text>
      <View style={styles.rewardsRow}>
        <View style={styles.rewardBox}>
          <Image source={require('../../assets/coin.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardText}>{t('rewards.coins')}</Text>
        </View>
        <View style={styles.rewardBox}>
          <Image source={require('../../assets/ranking.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardText}>{t('rewards.ranking')}</Text>
        </View>
        <View style={styles.rewardBox}>
          <Image source={require('../../assets/prizes.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardText}>{t('rewards.prizes')}</Text>
        </View>
      </View>
      <Text style={styles.info}>{t('rewards.info')}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.background, borderRadius: 23, margin: 17, padding: 20, ...colors.cardShadow },
  title: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 22, marginBottom: 13 },
  rewardsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  rewardBox: { alignItems: 'center', width: 100 },
  rewardIcon: { width: 40, height: 40, marginBottom: 7 },
  rewardText: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text, textAlign: 'center' },
  info: { fontFamily: beezyFont.regular, fontSize: 14, color: colors.text, marginTop: 9 },
});
