// App.js (zentrale Theme-Provider, Navigation, Language, StatusBar etc.)
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import MainNavigator from './MainNavigator';
import { colors } from './styles/theme';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
        <MainNavigator />
      </NavigationContainer>
    </I18nextProvider>
  );
}
