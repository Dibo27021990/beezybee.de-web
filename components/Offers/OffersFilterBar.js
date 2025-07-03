// components/Offers/OffersFilterBar.js (Filter für alle Offertypen – Kategorie, Distanz, Preis etc.)
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';

export default function OffersFilterBar({ filters, setFilters }) {
  return (
    <View style={styles.bar}>
      {/* Beispiel: Filter-Kategorien */}
      <TouchableOpacity style={styles.filterBtn} onPress={() => setFilters(f => ({ ...f, category: 'all' }))}>
        <Text style={styles.txt}>Alle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn} onPress={() => setFilters(f => ({ ...f, category: 'cleaning' }))}>
        <Text style={styles.txt}>Haushalt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn} onPress={() => setFilters(f => ({ ...f, category: 'moving' }))}>
        <Text style={styles.txt}>Umzug</Text>
      </TouchableOpacity>
      {/* ...weitere Filter */}
    </View>
  );
}
const styles = StyleSheet.create({
  bar: { flexDirection: 'row', alignItems: 'center', marginVertical: 11, marginLeft: 7 },
  filterBtn: { backgroundColor: '#FFF9DD', borderRadius: 15, paddingVertical: 7, paddingHorizontal: 16, marginRight: 8 },
  txt: { fontFamily: beezyFont.bold, fontSize: 14, color: colors.primary },
});
