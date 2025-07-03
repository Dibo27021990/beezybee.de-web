// components/Common/CompanyBeeToggle.js (Toggle für OffersTab: Beezybee / Borrowbee / Companybee)
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function CompanyBeeToggle({ value, onChange }) {
  const { t } = useTranslation();
  const segments = [
    { key: 'beezybee', label: t('offers.toggle.beezybee') },
    { key: 'borrowbee', label: t('offers.toggle.borrowbee') },
    { key: 'companybee', label: t('offers.toggle.companybee') },
  ];
  return (
    <View style={styles.row}>
      {segments.map((seg, i) => (
        <TouchableOpacity
          key={seg.key}
          style={[styles.segment, value === seg.key && styles.active]}
          onPress={() => onChange(seg.key)}
        >
          <Text style={[styles.txt, value === seg.key && styles.activeTxt]}>{seg.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', margin: 16 },
  segment: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF9DD',
    borderRadius: 12,
    paddingVertical: 11,
    marginHorizontal: 4,
    borderWidth: 1.2,
    borderColor: '#f4eeb1',
  },
  active: { backgroundColor: colors.primary, borderColor: colors.primary },
  txt: { fontFamily: beezyFont.bold, fontSize: 15, color: '#BF9A00' },
  activeTxt: { color: '#fff' },
});
