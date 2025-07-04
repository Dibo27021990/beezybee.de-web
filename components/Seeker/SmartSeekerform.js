// components/Seeker/SmartSeekerForm.js (zentraler Einstieg für KI-Anfragen – entscheidet Helper- vs Borrowbee)
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';
// import { runSmartGPT, ... } aus deiner KI/Utils-Logik

export default function SmartSeekerForm({ onSubmit }) {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!text.trim()) return;
    setLoading(true);
    // const result = await runSmartGPT(text); // KI analysiert & entscheidet!
    // if (result.type === 'borrowbee') ... else ...
    setLoading(false);
    onSubmit && onSubmit(text);
  }

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>{t('smartform.title')}</Text>
      <Text style={styles.subtitle}>{t('smartform.subtitle')}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder={t('smartform.placeholder')}
        editable={!loading}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit} disabled={loading}>
        <Text style={styles.btnTxt}>{t('smartform.cta')}</Text>
      </TouchableOpacity>
      {loading && <Text style={styles.loading}>{t('smartform.loading')}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 19, padding: 20, margin: 18, ...colors.cardShadow },
  title: { fontFamily: beezyFont.bold, fontSize: 20, color: colors.primary, marginBottom: 3 },
  subtitle: { fontFamily: beezyFont.regular, fontSize: 14, color: colors.text, marginBottom: 15 },
  input: { backgroundColor: '#fff9dd', borderRadius: 12, padding: 13, fontSize: 16, fontFamily: beezyFont.regular, marginBottom: 14 },
  btn: { backgroundColor: colors.primary, borderRadius: 100, paddingVertical: 13, paddingHorizontal: 32, alignSelf: 'flex-end' },
  btnTxt: { color: '#fff', fontFamily: beezyFont.bold, fontSize: 16 },
  loading: { fontFamily: beezyFont.regular, color: colors.primary, marginTop: 7 },
});
