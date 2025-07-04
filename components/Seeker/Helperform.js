// components/Seeker/HelperForm.js (klassisches Auftragsformular, alle Felder per i18n/common!)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function HelperForm({ onSubmit }) {
  const { t } = useTranslation();
  const [fields, setFields] = useState({
    category: '', description: '', date: '', location: '',
    price: '', license: false, company: false
  });

  function setField(name, value) {
    setFields(f => ({ ...f, [name]: value }));
  }

  function handleSubmit() {
    // Validierung, dann Firestore/Backend-Aufruf
    onSubmit && onSubmit(fields);
  }

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('helperform.title')}</Text>
      <TextInput style={styles.input} placeholder={t('helperform.category')} value={fields.category} onChangeText={v => setField('category', v)} />
      <TextInput style={styles.input} placeholder={t('helperform.description')} value={fields.description} onChangeText={v => setField('description', v)} multiline />
      <TextInput style={styles.input} placeholder={t('helperform.date')} value={fields.date} onChangeText={v => setField('date', v)} />
      <TextInput style={styles.input} placeholder={t('helperform.location')} value={fields.location} onChangeText={v => setField('location', v)} />
      <TextInput style={styles.input} placeholder={t('helperform.price')} value={fields.price} onChangeText={v => setField('price', v)} keyboardType="decimal-pad" />
      {/* Lizenz, Firma, Checkboxes */}
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTxt}>{t('helperform.submit')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 19, padding: 20, margin: 18, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 11 },
  input: { backgroundColor: '#fff9dd', borderRadius: 10, padding: 13, fontSize: 15, fontFamily: beezyFont.regular, marginBottom: 10 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 11, paddingHorizontal: 24, alignSelf: 'flex-end' },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 15 },
});
