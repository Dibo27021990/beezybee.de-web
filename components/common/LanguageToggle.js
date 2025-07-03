// components/Common/LanguageToggle.js (Kompakter Language-Switch, der auf App/Web passt!)
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors } from '../../styles/theme';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language === 'en' ? 'EN' : 'DE';
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => i18n.changeLanguage('de')}>
        <Text style={[styles.txt, current === 'DE' && styles.active]}>DE</Text>
      </TouchableOpacity>
      <Text style={styles.sep}>/</Text>
      <TouchableOpacity onPress={() => i18n.changeLanguage('en')}>
        <Text style={[styles.txt, current === 'EN' && styles.active]}>EN</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginLeft: 14 },
  txt: { color: '#B4B4B4', fontSize: 15, fontWeight: 'bold', marginHorizontal: 3 },
  active: { color: colors.primary },
  sep: { color: '#D9D9D9', fontSize: 15, marginHorizontal: 1 },
});
