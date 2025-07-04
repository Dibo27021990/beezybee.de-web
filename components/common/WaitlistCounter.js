// components/Common/WaitlistCounter.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, beezyFont } from '../../styles/theme';
import { db } from '../../firebaseConfig';
import { collection, getCountFromServer } from 'firebase/firestore';

export default function WaitlistCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchCount() {
      try {
        const snap = await getCountFromServer(collection(db, 'waitlist'));
        setCount(snap.data().count);
      } catch { }
    }
    fetchCount();
  }, []);
  return (
    <View style={styles.bg}>
      <Text style={styles.txt}>Schon <Text style={styles.num}>{count}</Text> User auf der Warteliste!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { alignItems: 'center', margin: 14, marginTop: 0 },
  txt: { fontFamily: beezyFont.regular, fontSize: 16, color: colors.text },
  num: { fontFamily: beezyFont.bold, color: colors.primary, fontSize: 17 },
});
