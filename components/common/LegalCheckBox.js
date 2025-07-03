// components/Common/LegalCheckBox.js (AGB/Privacy-Checkbox für Registrierung – Sprache automatisch!)
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function LegalCheckBox({ checked, onToggle, onLegalPress }) {
  const { t } = useTranslation();
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onToggle} style={styles.box}>
        <View style={[styles.chk, checked && styles.checked]} />
      </TouchableOpacity>
      <Text style={styles.txt}>
        {t('register.legal1')}{' '}
        <Text style={styles.link} onPress={() => onLegalPress('terms')}>{t('register.terms')}</Text>{' '}
        {t('register.legal2')}{' '}
        <Text style={styles.link} onPress={() => onLegalPress('privacy')}>{t('register.privacy')}</Text>.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 14 },
  box: { width: 27, height: 27, borderRadius: 7, borderWidth: 2, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginRight: 9 },
  chk: { width: 17, height: 17, borderRadius: 5, backgroundColor: '#fff' },
  checked: { backgroundColor: colors.primary },
  txt: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text },
  link: { color: colors.primary, textDecorationLine: 'underline' },
});
