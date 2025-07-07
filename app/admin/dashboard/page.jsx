"use client";

import { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
// Assuming react-map-gl is installed for Mapbox
import Map, { Source, Layer } from 'react-map-gl';

export default function AdminDashboardPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [waitlistEntries, setWaitlistEntries] = useState([]);
  const [tickets, setTickets] = useState([]);

  // Protect the route: redirect to login if not authenticated
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        router.push('/adminlogin');
      }
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    // Fetch waitlist entries and support tickets from Firestore
    const fetchData = async () => {
      const waitlistSnapshot = await getDocs(collection(db, 'waitlist'));
      const ticketsSnapshot = await getDocs(collection(db, 'tickets'));
      setWaitlistEntries(waitlistSnapshot.docs.map(doc => doc.data()));
      setTickets(ticketsSnapshot.docs.map(doc => doc.data()));
    };
    fetchData().catch(err => console.error('Error loading admin data:', err));
  }, []);

  // Prepare geoJSON for heatmap from waitlist entries (simple geocoding simulation)
  const geoFeatures = waitlistEntries.map(entry => {
    // Dummy geocoding: (In reality, convert entry.postalCode -> { lat, lng })
    // Here we just assign a constant or simple hash to latitude/longitude for demo.
    let lat = 50.0, lng = 10.0;
    if (entry.postalCode) {
      const zipNum = parseInt(entry.postalCode.substr(0, 2)); // first two digits as region
      if (!isNaN(zipNum)) {
        lat = 50 + zipNum * 0.1;
        lng = 10 + zipNum * 0.1;
      }
    }
    return {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [lng, lat]
      }
    };
  });

  const geoJsonData = {
    type: 'FeatureCollection',
    features: geoFeatures
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">{t('admin.dashboardTitle')}</h1>
      {/* New Tickets section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t('admin.newTickets')}</h2>
        {tickets.length === 0 ? (
          <p>No new tickets.</p>
        ) : (
          <ul className="list-disc list-inside">
            {tickets.map((ticket, idx) => (
              <li key={idx}>
                <strong>{ticket.category}:</strong> {ticket.message} <em>({ticket.email})</em>
              </li>
            ))}
          </ul>
        )}
      </section>
      {/* Waitlist Heatmap */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t('admin.waitlistHeatmap')}</h2>
        <div className="h-64 w-full mb-4">
          <Map
            initialViewState={{ latitude: 51.0, longitude: 10.0, zoom: 5 }}
            mapStyle={`https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          >
            <Source id="waitlist" type="geojson" data={geoJsonData}>
              <Layer
                id="waitlist-heat"
                type="heatmap"
                source="waitlist"
                paint={{
                  // Increase intensity with zoom
                  'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
                  // Color ramp for heatmap (simple two-color ramp)
                  'heatmap-color': [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0, 'rgba(0,0,255,0)',
                    0.5, 'rgba(0,255,0,0.5)',
                    1, 'rgba(255,0,0,0.8)'
                  ],
                  'heatmap-radius': 20
                }}
              />
            </Source>
          </Map>
        </div>
      </section>
      {/* Waitlist Entries Table */}
      <section>
        <h2 className="text-xl font-semibold mb-2">{t('admin.waitlistTable')}</h2>
        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Email</th>
              <th className="p-2">{t('waitlist.fieldZip')}</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {waitlistEntries.map((entry, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{entry.email}</td>
                <td className="p-2">{entry.postalCode}</td>
                <td className="p-2">{entry.role === 'helper' ? t('waitlist.roleHelper') : t('waitlist.roleSeeker')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
