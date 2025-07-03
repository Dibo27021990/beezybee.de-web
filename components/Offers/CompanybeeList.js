// components/Offers/CompanybeeList.js (Companybee-Feed, Firmenjobs & Filter)
import React from 'react';
import { FlatList } from 'react-native';
import CompanybeeCard from './CompanybeeCard';
// ...Data-Import...

export default function CompanybeeList() {
  // const data = ... (deine Firmenaufträge aus Firestore/Backend)
  return (
    <FlatList
      data={[] /* hier deine Daten */}
      renderItem={({ item }) => <CompanybeeCard item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 15 }}
    />
  );
}
