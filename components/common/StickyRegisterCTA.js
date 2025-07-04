// components/Common/StickyRegisterCTA.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function StickyRegisterCTA({ onRegister }) {
  const { t } = useTranslation();
  return (
    <View style={styles.sticky}>
      <Text style={styles.text}>{t('cta.claim')}</Text>
      <TouchableOpacity style={styles.btn} onPress={onRegister}>
        <Text style={styles.btnTxt}>{t('cta.register')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  sticky: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderRadius: 22,
    shadowColor: '#ffef8d', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.18, shadowRadius: 8,
    position: 'absolute', left: 12, right: 12, bottom: 19, zIndex: 99,
  },
  text: { color: colors.text, fontFamily: beezyFont.bold, fontSize: 17 },
  btn: { backgroundColor: '#222', borderRadius: 100, paddingHorizontal: 22, paddingVertical: 9, marginLeft: 16 },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 16 },
});
