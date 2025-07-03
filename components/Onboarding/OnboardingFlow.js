// components/Onboarding/OnboardingFlow.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

const steps = [
  {
    title: 'onboarding.step1.title',
    text: 'onboarding.step1.text',
    img: require('../../assets/onboard1.png'),
  },
  {
    title: 'onboarding.step2.title',
    text: 'onboarding.step2.text',
    img: require('../../assets/onboard2.png'),
  },
  {
    title: 'onboarding.step3.title',
    text: 'onboarding.step3.text',
    img: require('../../assets/onboard3.png'),
  },
];

export default function OnboardingFlow({ onDone }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  return (
    <View style={styles.bg}>
      <Image source={steps[step].img} style={styles.img} />
      <Text style={styles.title}>{t(steps[step].title)}</Text>
      <Text style={styles.text}>{t(steps[step].text)}</Text>
      <View style={styles.dots}>
        {steps.map((_, i) => (
          <View key={i} style={[styles.dot, i === step && styles.active]} />
        ))}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => (step === steps.length - 1 ? onDone() : setStep(s => s + 1))}
      >
        <Text style={styles.btnTxt}>
          {step === steps.length - 1 ? t('onboarding.start') : t('common.next')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, padding: 20 },
  img: { width: 160, height: 160, marginBottom: 22 },
  title: { fontFamily: beezyFont.bold, fontSize: 22, color: colors.primary, marginBottom: 10, textAlign: 'center' },
  text: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text, marginBottom: 25, textAlign: 'center' },
  dots: { flexDirection: 'row', marginBottom: 21 },
  dot: { width: 11, height: 11, borderRadius: 6, backgroundColor: colors.border, margin: 5 },
  active: { backgroundColor: colors.primary },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingHorizontal: 32, paddingVertical: 12 },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 17 },
});
