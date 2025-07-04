// components/Support/SupportForm.js (Supportanfrage senden, mit Kategorie-Auswahl)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function SupportForm({ onSubmit }) {
  const { t } = useTranslation();
  const [fields, setFields] = useState({ email: '', message: '', category: '' });

  function setField(name, value) {
    setFields(f => ({ ...f, [name]: value }));
  }

  function handleSubmit() {
    // Validierung, dann an Firestore senden
    onSubmit && onSubmit(fields);
  }

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('support.title')}</Text>
      <TextInput
        style={styles.input}
        value={fields.email}
        onChangeText={v => setField('email', v)}
        placeholder={t('support.email')}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={fields.category}
        onChangeText={v => setField('category', v)}
        placeholder={t('support.category')}
      />
      <TextInput
        style={[styles.input, { minHeight: 60 }]}
        value={fields.message}
        onChangeText={v => setField('message', v)}
        placeholder={t('support.message')}
        multiline
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTxt}>{t('support.send')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 17, padding: 18, margin: 18, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 18, color: colors.primary, marginBottom: 9 },
  input: { backgroundColor: '#fff9dd', borderRadius: 10, padding: 13, fontSize: 15, fontFamily: beezyFont.regular, marginBottom: 10 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 11, paddingHorizontal: 24, alignSelf: 'flex-end' },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 15 },
});
