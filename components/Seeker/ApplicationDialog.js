// components/Seeker/ApplicationDialog.js (Für Bewerben, Chat, Angebotsannahme etc.)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function ApplicationDialog({ onSubmit }) {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');

  function handleSubmit() {
    if (!message.trim()) return;
    onSubmit && onSubmit(message);
  }

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('application.title')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('application.placeholder')}
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTxt}>{t('application.send')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 18, padding: 16, margin: 17, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 18, color: colors.primary, marginBottom: 7 },
  input: { backgroundColor: '#fff9dd', borderRadius: 11, padding: 12, fontSize: 15, fontFamily: beezyFont.regular, marginBottom: 13 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 10, paddingHorizontal: 26, alignSelf: 'flex-end' },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 15 },
});
