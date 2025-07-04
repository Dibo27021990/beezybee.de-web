// components/Common/Tooltip.js (Kleines Info-i für kurze Hinweise, überall einsetzbar)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function Tooltip({ label, info }) {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.i}>i</Text>
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.box}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.info}>{info}</Text>
            <TouchableOpacity onPress={() => setVisible(false)} style={styles.btn}>
              <Text style={styles.btnTxt}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  i: { fontFamily: beezyFont.bold, fontSize: 18, color: colors.primary, paddingHorizontal: 8, paddingVertical: 3 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.13)', alignItems: 'center', justifyContent: 'center' },
  box: { backgroundColor: colors.card, borderRadius: 17, padding: 22, maxWidth: 300, alignItems: 'center' },
  label: { fontFamily: beezyFont.bold, fontSize: 16, color: colors.primary, marginBottom: 6 },
  info: { fontFamily: beezyFont.regular, fontSize: 14, color: colors.text, marginBottom: 9, textAlign: 'center' },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingHorizontal: 20, paddingVertical: 7, marginTop: 7 },
  btnTxt: { color: colors.white, fontFamily: beezyFont.bold, fontSize: 15 },
});
