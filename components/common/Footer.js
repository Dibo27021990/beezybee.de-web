// components/Common/Footer.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function Footer({ onLegalPress }) {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <View style={styles.footer}>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => onLegalPress('privacy')}>
          <Text style={styles.link}>{t('footer.privacy')}</Text>
        </TouchableOpacity>
        <Text style={styles.sep}>·</Text>
        <TouchableOpacity onPress={() => onLegalPress('terms')}>
          <Text style={styles.link}>{t('footer.terms')}</Text>
        </TouchableOpacity>
        <Text style={styles.sep}>·</Text>
        <TouchableOpacity onPress={() => onLegalPress('impressum')}>
          <Text style={styles.link}>{t('footer.impressum')}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyright}>
        Beezybee © {year} – {t('footer.claim')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingVertical: 16,
    borderTopWidth: 0.7,
    borderTopColor: colors.border,
  },
  links: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  link: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 15, marginHorizontal: 3 },
  sep: { color: colors.border, fontSize: 17, fontWeight: 'bold' },
  copyright: { color: colors.text, fontSize: 13, fontFamily: beezyFont.regular, opacity: 0.65 },
});
