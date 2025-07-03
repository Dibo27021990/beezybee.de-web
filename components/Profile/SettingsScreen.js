// components/Profile/SettingsScreen.js (User-Settings, Sprache, Datenschutz, Account löschen)
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import LanguageToggle from '../Common/LanguageToggle';
import { colors, beezyFont } from '../../styles/theme';

export default function SettingsScreen({ onLegalPress, onDeleteAccount }) {
  const { t } = useTranslation();
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('settings.title')}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>{t('settings.language')}</Text>
        <LanguageToggle />
      </View>
      <TouchableOpacity style={styles.link} onPress={() => onLegalPress('privacy')}>
        <Text style={styles.linkTxt}>{t('settings.privacy')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => onLegalPress('terms')}>
        <Text style={styles.linkTxt}>{t('settings.terms')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.danger} onPress={() => {
        Alert.alert(t('settings.deleteTitle'), t('settings.deleteMsg'), [
          { text: t('common.cancel') },
          { text: t('settings.delete'), onPress: onDeleteAccount, style: 'destructive' }
        ]);
      }}>
        <Text style={styles.dangerTxt}>{t('settings.delete')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 21, padding: 23, margin: 17, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 9 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  label: { fontFamily: beezyFont.regular, fontSize: 16, color: colors.text, marginRight: 8 },
  link: { marginVertical: 9 },
  linkTxt: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 15, textDecorationLine: 'underline' },
  danger: { marginTop: 22 },
  dangerTxt: { color: '#d82b2b', fontFamily: beezyFont.bold, fontSize: 15 },
});
