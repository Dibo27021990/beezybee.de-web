// components/Offers/OffersList.js (Dein klassischer Help/Job-Feed)
import React from 'react';
import { FlatList } from 'react-native';
import OfferCard from './OfferCard';
// ...Data-Import (Firebase oder Dummy)...

export default function OffersList() {
  // const data = ... (deine Aufträge aus Firestore/Backend)
  return (
    <FlatList
      data={[] /* hier deine Daten */}
      renderItem={({ item }) => <OfferCard offer={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 15 }}
    />
  );
}
