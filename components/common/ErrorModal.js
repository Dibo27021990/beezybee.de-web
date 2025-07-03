// components/Common/ErrorModal.js (Fehlermeldung für jede Aktion)
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function ErrorModal({ visible, error, onClose }) {
  if (!visible) return null;
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Fehler</Text>
          <Text style={styles.text}>{error}</Text>
          <TouchableOpacity onPress={onClose} style={styles.btn}>
            <Text style={styles.btnTxt}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.13)', alignItems: 'center', justifyContent: 'center' },
  box: { backgroundColor: colors.card, borderRadius: 21, padding: 26, maxWidth: 340, alignItems: 'center' },
  title: { fontFamily: beezyFont.bold, fontSize: 18, color: '#C71F1F', marginBottom: 9 },
  text: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text, marginBottom: 16, textAlign: 'center' },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingHorizontal: 24, paddingVertical: 9 },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 16 },
});
