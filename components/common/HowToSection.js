// components/Common/HowToSection.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function HowToSection() {
  const { t } = useTranslation();
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('howto.title')}</Text>
      <View style={styles.steps}>
        <View style={styles.step}>
          <Image source={require('../../assets/step1.png')} style={styles.icon} />
          <Text style={styles.stepTxt}>{t('howto.step1')}</Text>
        </View>
        <View style={styles.step}>
          <Image source={require('../../assets/step2.png')} style={styles.icon} />
          <Text style={styles.stepTxt}>{t('howto.step2')}</Text>
        </View>
        <View style={styles.step}>
          <Image source={require('../../assets/step3.png')} style={styles.icon} />
          <Text style={styles.stepTxt}>{t('howto.step3')}</Text>
        </View>
      </View>
      <Text style={styles.faqTitle}>{t('howto.faqTitle')}</Text>
      <View style={styles.faqList}>
        <Text style={styles.q}>{t('howto.q1.q')}</Text>
        <Text style={styles.a}>{t('howto.q1.a')}</Text>
        <Text style={styles.q}>{t('howto.q2.q')}</Text>
        <Text style={styles.a}>{t('howto.q2.a')}</Text>
        <Text style={styles.q}>{t('howto.q3.q')}</Text>
        <Text style={styles.a}>{t('howto.q3.a')}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.background, borderRadius: 23, margin: 17, padding: 20, ...colors.cardShadow },
  title: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 22, marginBottom: 12 },
  steps: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  step: { alignItems: 'center', width: 85 },
  icon: { width: 48, height: 48, marginBottom: 7 },
  stepTxt: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text, textAlign: 'center' },
  faqTitle: { fontFamily: beezyFont.bold, fontSize: 17, marginVertical: 9, color: colors.primary },
  faqList: { marginTop: 2 },
  q: { color: colors.primary, fontFamily: beezyFont.bold, marginTop: 7 },
  a: { color: colors.text, fontFamily: beezyFont.regular, marginBottom: 5 },
});
