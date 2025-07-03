// components/Rewards/RewardsTab.js (Belohnungen, Freunde-werben, Ranking, Prizes, HowTo, alles im Look)
import React from 'react';
import { ScrollView, View } from 'react-native';
import RewardsSection from '../Common/RewardsSection';
import ReferralBox from '../Common/ReferralBox';
import RewardRanking from '../Profile/RewardRanking';
import FeatureBubbles from '../Common/FeatureBubbles';
import HowToSection from '../Common/HowToSection';
import { useAuth } from '../../authSession';
import UserStatsCard from '../Common/UserStatsCard';

export default function RewardsTab() {
  const { user } = useAuth();
  return (
    <ScrollView>
      <UserStatsCard coins={user.coins} rank={user.rank} jobs={user.jobs} rating={user.rating} />
      <FeatureBubbles />
      <RewardsSection />
      <ReferralBox referralLink={`https://beezybee.com/invite/${user.refCode}`} />
      <RewardRanking />
      <HowToSection />
    </ScrollView>
  );
}
