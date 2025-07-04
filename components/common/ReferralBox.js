// components/Common/ReferralBox.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Share } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function ReferralBox({ referralLink }) {
  const { t } = useTranslation();
  const handleShare = async () => {
    try {
      await Share.share({ message: `${t('referral.msg')} ${referralLink}` });
    } catch {}
  };
  return (
    <View style={styles.bg}>
      <Image source={require('../../assets/bee_referral.png')} style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{t('referral.title')}</Text>
        <Text style={styles.text}>{t('referral.text')}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleShare}>
          <Text style={styles.btnTxt}>{t('referral.share')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.background, borderRadius: 22, padding: 16, margin: 17, marginTop: 0, ...colors.cardShadow },
  icon: { width: 46, height: 46, marginRight: 14 },
  title: { fontFamily: beezyFont.bold, fontSize: 18, color: colors.primary, marginBottom: 2 },
  text: { fontFamily: beezyFont.regular, fontSize: 14, color: colors.text, marginBottom: 9 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 8, paddingHorizontal: 26, alignSelf: 'flex-start' },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 15 },
});
