// navigation/MainNavigator.js (Tab-Navigation, zentral, 5 Tabs, custom Styling)
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/Home/HomeScreen';
import OffersTab from '../components/Offers/OffersTab';
import SmartSeekerForm from '../components/Seeker/SmartSeekerForm';
import RewardsTab from '../components/Rewards/RewardsTab';
import ProfileTab from '../components/Profile/ProfileTab';
import { Image } from 'react-native';
import { colors } from '../styles/theme';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { backgroundColor: colors.background, borderTopLeftRadius: 20, borderTopRightRadius: 20, height: 68 },
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'Home') icon = require('../assets/home.png');
          if (route.name === 'Offers') icon = require('../assets/list.png');
          if (route.name === 'Seeker') icon = require('../assets/plus.png');
          if (route.name === 'Rewards') icon = require('../assets/trophy.png');
          if (route.name === 'Profile') icon = require('../assets/profile.png');
          return <Image source={icon} style={{ width: 32, height: 32, opacity: focused ? 1 : 0.62 }} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Offers" component={OffersTab} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Seeker" component={SmartSeekerForm} options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => (
          <Image source={require('../assets/plus.png')} style={{
            width: 48, height: 48, marginBottom: 8,
            opacity: 1, backgroundColor: colors.primary,
            borderRadius: 25, borderWidth: 3, borderColor: colors.background
          }} />
        )
      }} />
      <Tab.Screen name="Rewards" component={RewardsTab} options={{ tabBarLabel: '' }} />
      <Tab.Screen name="Profile" component={ProfileTab} options={{ tabBarLabel: '' }} />
    </Tab.Navigator>
  );
}
