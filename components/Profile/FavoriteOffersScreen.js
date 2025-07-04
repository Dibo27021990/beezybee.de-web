// components/Profile/FavoriteOffersScreen.js (Liste aller Favoriten des Users)
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import OfferCard from '../Offers/OfferCard';
import EmptyState from '../Common/EmptyState';
import { useAuth } from '../../authSession';

export default function FavoriteOffersScreen() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, 'tasks'));
      setFavorites(
        snap.docs.map(d => ({ ...d.data(), id: d.id }))
          .filter(j => (user.favoriteJobs || []).includes(j.id))
      );
    };
    fetch();
  }, [user]);
  return (
    <View>
      <Text style={{ fontSize: 21, fontWeight: 'bold', margin: 15 }}>Favoriten</Text>
      {favorites.length ? (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <OfferCard offer={item} />}
        />
      ) : (
        <EmptyState text="Noch keine Favoriten." />
      )}
    </View>
  );
}
