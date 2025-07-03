// components/Common/CookieConsent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.text}>{t('cookie.text')}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => setVisible(false)}>
            <Text style={styles.btnTxt}>{t('cookie.ok')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.09)' },
  box: { width: '94%', backgroundColor: colors.card, borderRadius: 17, marginBottom: 22, padding: 20, alignItems: 'center' },
  text: { color: colors.text, fontFamily: beezyFont.regular, fontSize: 15, marginBottom: 10, textAlign: 'center' },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 9, paddingHorizontal: 34 },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 16 },
});
