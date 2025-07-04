// components/Legal/LegalModal.js (AGB, Datenschutz, Nutzungsbedingungen, alles in Modal)
import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function LegalModal({ visible, onClose, title, content }) {
  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>{title}</Text>
          <ScrollView style={{ maxHeight: 420 }}>
            <Text style={styles.text}>{content}</Text>
          </ScrollView>
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
  box: { backgroundColor: colors.card, borderRadius: 23, padding: 24, maxWidth: 380, alignItems: 'center' },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 9 },
  text: { fontFamily: beezyFont.regular, fontSize: 14, color: colors.text, marginBottom: 13, textAlign: 'left' },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingHorizontal: 27, paddingVertical: 9, marginTop: 10 },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 16 },
});
