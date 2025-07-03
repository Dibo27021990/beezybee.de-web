// components/Common/SocialBar.js (Social-Media & App-Download Bar)
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function SocialBar({ onInsta, onFb, onTiktok, onAppstore, onPlaystore }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onInsta}><Image source={require('../../assets/insta.png')} style={styles.icon} /></TouchableOpacity>
      <TouchableOpacity onPress={onFb}><Image source={require('../../assets/fb.png')} style={styles.icon} /></TouchableOpacity>
      <TouchableOpacity onPress={onTiktok}><Image source={require('../../assets/tiktok.png')} style={styles.icon} /></TouchableOpacity>
      <TouchableOpacity onPress={onAppstore}><Image source={require('../../assets/appstore.png')} style={styles.icon} /></TouchableOpacity>
      <TouchableOpacity onPress={onPlaystore}><Image source={require('../../assets/playstore.png')} style={styles.icon} /></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', marginVertical: 13 },
  icon: { width: 34, height: 34, marginHorizontal: 10, borderRadius: 8 },
});
