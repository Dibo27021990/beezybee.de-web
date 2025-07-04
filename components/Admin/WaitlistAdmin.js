// components/Admin/WaitlistAdmin.js (Admin-View: Warteliste, Heatmap etc.)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { colors, beezyFont } from '../../styles/theme';

export default function WaitlistAdmin() {
  const [waitlist, setWaitlist] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const snap = await getDocs(collection(db, 'waitlist'));
      setWaitlist(snap.docs.map(d => ({ ...d.data(), id: d.id })));
    }
    fetchData();
  }, []);

  return (
    <View style={styles.bg}>
      <Text style={styles.title}>Warteliste</Text>
      <FlatList
        data={waitlist}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.email}</Text>
            <Text style={styles.time}>{item.createdAt?.toDate().toLocaleString() || ''}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 18, padding: 18, margin: 18 },
  title: { fontFamily: beezyFont.bold, fontSize: 19, color: colors.primary, marginBottom: 11 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#f4eeb1', paddingVertical: 8 },
  name: { fontFamily: beezyFont.regular, color: colors.text, fontSize: 14 },
  time: { fontFamily: beezyFont.regular, color: colors.text, fontSize: 12, opacity: 0.6 },
});
