// components/Common/LegalModal.js (zeigt Privacy, Terms, Impressum in Modal – Language-ready)
import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function LegalModal({ visible, onClose, contentType }) {
  const { t, i18n } = useTranslation();

  // Dummy-Inhalte, später durch importierte Texte ersetzen
  let content = '';
  if (contentType === 'privacy') {
    content = t('legal.privacy');
  } else if (contentType === 'terms') {
    content = t('legal.terms');
  } else if (contentType === 'impressum') {
    content = t('legal.impressum');
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <ScrollView>
            <Text style={styles.title}>{t(`legal.${contentType}Title`)}</Text>
            <Text style={styles.body}>{content}</Text>
          </ScrollView>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeTxt}>{t('common.close')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.23)', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: colors.background, borderRadius: 24, padding: 24, maxWidth: 380, width: '94%', maxHeight: '88%' },
  title: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 20, marginBottom: 13 },
  body: { color: colors.text, fontFamily: beezyFont.regular, fontSize: 15, lineHeight: 22, marginBottom: 17 },
  closeBtn: { alignSelf: 'center', backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 10, paddingHorizontal: 38, marginTop: 6 },
  closeTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 15 },
});
