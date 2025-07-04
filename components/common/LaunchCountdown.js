// components/Common/LaunchCountdown.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, beezyFont } from '../../styles/theme';

export default function LaunchCountdown({ launchDate }) {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const end = new Date(launchDate);
      const diff = Math.max(end - now, 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    update();
    const timer = setInterval(update, 1000 * 60);
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <View style={styles.bg}>
      <Text style={styles.txt}>{t('countdown.launchIn')}</Text>
      <Text style={styles.timer}>{timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: { backgroundColor: colors.card, borderRadius: 16, padding: 16, alignItems: 'center', margin: 16, marginBottom: 0 },
  txt: { fontFamily: beezyFont.regular, color: colors.primary, fontSize: 16 },
  timer: { fontFamily: beezyFont.bold, color: colors.text, fontSize: 23, letterSpacing: 1, marginTop: 3 },
});
