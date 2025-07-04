// components/Common/FAQAccordion.js (Schönes, animiertes FAQ für Homepage & App)
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(-1);
  const { t } = useTranslation();
  return (
    <View style={styles.bg}>
      {items.map((item, i) => (
        <View key={i}>
          <TouchableOpacity
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setOpen(open === i ? -1 : i);
            }}
            style={styles.qRow}
          >
            <Text style={styles.q}>{t(item.q)}</Text>
          </TouchableOpacity>
          {open === i && <Text style={styles.a}>{t(item.a)}</Text>}
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 19, margin: 18, marginTop: 0, padding: 18, ...colors.cardShadow },
  qRow: { paddingVertical: 10 },
  q: { fontFamily: beezyFont.bold, color: colors.primary, fontSize: 16 },
  a: { fontFamily: beezyFont.regular, color: colors.text, fontSize: 15, marginLeft: 6, marginBottom: 9 },
});
