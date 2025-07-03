// components/Profile/ProfileTab.js (Profil-Screen, Tab mit allen Bereichen)
import React from 'react';
import { View, ScrollView } from 'react-native';
import ProfileCard from './ProfileCard';
import RewardRanking from './RewardRanking';
import SettingsScreen from './SettingsScreen';

export default function ProfileTab({ user, onLegalPress, onDeleteAccount }) {
  return (
    <ScrollView>
      <ProfileCard user={user} />
      <RewardRanking />
      <SettingsScreen onLegalPress={onLegalPress} onDeleteAccount={onDeleteAccount} />
    </ScrollView>
  );
}
