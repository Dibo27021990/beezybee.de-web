// components/Offers/DetailModal.js (Detailansicht für Auftrag/Leihobjekt)
import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function DetailModal({ visible, onClose, data }) {
  if (!visible || !data) return null;
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {data.image && <Image source={{ uri: data.image }} style={styles.img} />}
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.description}</Text>
          <Text style={styles.info}>{data.price} € {data.location ? `• ${data.location}` : ''}</Text>
          {/* Buttons: Bewerben, Favorit, Chat, etc. */}
          <TouchableOpacity style={styles.btn} onPress={onClose}>
            <Text style={styles.btnTxt}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.13)', alignItems: 'center', justifyContent: 'center' },
  modal: { backgroundColor: colors.card, borderRadius: 22, padding: 25, alignItems: 'center', maxWidth: 360 },
  img: { width: 120, height: 120, borderRadius: 15, marginBottom: 11 },
  title: { fontFamily: beezyFont.bold, fontSize: 20, color: colors.primary, marginBottom: 7 },
  desc: { fontFamily: beezyFont.regular, fontSize: 15, color: colors.text, marginBottom: 6, textAlign: 'center' },
  info: { fontFamily: beezyFont.regular, color: colors.text, opacity: 0.7, marginBottom: 9 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 10, paddingHorizontal: 26, marginTop: 7 },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 15 },
});
