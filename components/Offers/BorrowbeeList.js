// components/Offers/BorrowbeeList.js (Borrowbee-Feed, Leihobjekte & Filter)
import React from 'react';
import { FlatList } from 'react-native';
import BorrowbeeCard from './BorrowbeeCard';
// ...Data-Import...

export default function BorrowbeeList() {
  // const data = ... (deine Leihobjekte aus Firestore/Backend)
  return (
    <FlatList
      data={[] /* hier deine Daten */}
      renderItem={({ item }) => <BorrowbeeCard item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 15 }}
    />
  );
}
