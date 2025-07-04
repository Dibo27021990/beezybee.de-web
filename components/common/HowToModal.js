// components/Common/HowToModal.js (HowTo-/FAQ-Modal für Onboarding, Hilfe, uvm.)
import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function HowToModal({ visible, onClose, children }) {
  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <ScrollView style={{ maxHeight: 420 }}>
            {children}
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
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingHorizontal: 27, paddingVertical: 9, marginTop: 10 },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 16 },
});
