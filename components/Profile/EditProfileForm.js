// components/Profile/EditProfileForm.js (Editieren von Name, Bio, Avatar etc.)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function EditProfileForm({ user, onSubmit }) {
  const { t } = useTranslation();
  const [fields, setFields] = useState({
    username: user.username, bio: user.bio, avatar: user.avatar,
  });

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true, aspect: [1, 1], quality: 0.8 });
    if (!result.cancelled) setFields(f => ({ ...f, avatar: result.assets[0].uri }));
  }

  function setField(name, value) {
    setFields(f => ({ ...f, [name]: value }));
  }

  function handleSubmit() {
    onSubmit && onSubmit(fields);
  }

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('profile.editTitle')}</Text>
      <TouchableOpacity onPress={pickImage}>
        <Image source={{ uri: fields.avatar }} style={styles.avatar} />
        <Text style={styles.link}>{t('profile.editAvatar')}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} value={fields.username} onChangeText={v => setField('username', v)} placeholder={t('profile.username')} />
      <TextInput style={styles.input} value={fields.bio} onChangeText={v => setField('bio', v)} placeholder={t('profile.bio')} multiline />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnTxt}>{t('profile.save')}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 19, padding: 20, margin: 18, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 7 },
  avatar: { width: 76, height: 76, borderRadius: 38, marginBottom: 7, backgroundColor: '#fff9dd', alignSelf: 'center' },
  link: { color: colors.primary, fontFamily: beezyFont.bold, fontSize: 14, textAlign: 'center', marginBottom: 7, textDecorationLine: 'underline' },
  input: { backgroundColor: '#fff9dd', borderRadius: 10, padding: 13, fontSize: 15, fontFamily: beezyFont.regular, marginBottom: 10 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 11, paddingHorizontal: 24, alignSelf: 'flex-end' },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 15 },
});
