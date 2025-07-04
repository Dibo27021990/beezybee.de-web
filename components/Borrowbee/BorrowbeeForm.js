// components/Borrowbee/BorrowbeeForm.js (Leihobjekt erstellen, mit Foto-Upload)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function BorrowbeeForm({ onSubmit }) {
  const { t } = useTranslation();
  const [fields, setFields] = useState({
    title: '', description: '', price: '', location: '', image: ''
  });

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true, aspect: [1, 1], quality: 0.8 });
    if (!result.cancelled) setFields(f => ({ ...f, image: result.assets[0].uri }));
  }

  function setField(name, value) {
    setFields(f => ({ ...f, [name]: value }));
  }

  function handleSubmit() {
    // Validierung, dann Firestore/Backend-Aufruf
    onSubmit && onSubmit(fields);
  }

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('borrowform.title')}</Text>
      <TouchableOpacity onPress={pickImage} style={styles.uploadBtn}>
        {fields.image ? (
          <Image source={{ uri: fields.image }} style={styles.img} />
        ) : (
          <Text style={styles.uploadTxt}>{t('borrowform.upload')}</Text>
        )}
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder={t('borrowform.titleInput')} value={fields.title} onChangeText={v => setField('title', v)} />
      <TextInput style={styles.input} placeholder={t('borrowform.description')} value={fields.description} onChangeText={v => setField('description', v)} multiline />
      <TextInput style={styles.input} placeholder={t('borrowform.price')} value={fields.price} onChangeText={v => setField('price', v)} keyboardType="decimal-pad" />
      <TextInput style={styles.input} placeholder={t('borrowform.location')} value={fields.location} onChangeText={v => setField('location', v)} />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTxt}>{t('borrowform.submit')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 19, padding: 20, margin: 18, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 9 },
  uploadBtn: { backgroundColor: '#fff9dd', borderRadius: 15, alignItems: 'center', justifyContent: 'center', height: 92, marginBottom: 11 },
  img: { width: 88, height: 88, borderRadius: 13 },
  uploadTxt: { fontFamily: beezyFont.bold, color: colors.primary, fontSize: 15 },
  input: { backgroundColor: '#fff9dd', borderRadius: 10, padding: 13, fontSize: 15, fontFamily: beezyFont.regular, marginBottom: 10 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 11, paddingHorizontal: 24, alignSelf: 'flex-end' },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 15 },
});
