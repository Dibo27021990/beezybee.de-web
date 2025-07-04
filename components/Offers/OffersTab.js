// components/Offers/OffersTab.js (Offers mit Segment-Control, Filter & Listen)
import React, { useState } from 'react';
import { View } from 'react-native';
import CompanyBeeToggle from '../Common/CompanyBeeToggle';
import OffersList from './OffersList';
import BorrowbeeList from './BorrowbeeList';
import CompanybeeList from './CompanybeeList';

export default function OffersTab() {
  const [mode, setMode] = useState('beezybee'); // beezybee | borrowbee | companybee

  return (
    <View style={{ flex: 1 }}>
      <CompanyBeeToggle value={mode} onChange={setMode} />
      {mode === 'beezybee' && <OffersList />}
      {mode === 'borrowbee' && <BorrowbeeList />}
      {mode === 'companybee' && <CompanybeeList />}
    </View>
  );
}
