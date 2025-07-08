'use client';
export const dynamic = 'force-dynamic';

import StickyHeader from '@/components/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function RewardsPage() { /* ... */ }


import dynamic from 'next/dynamic';

const Map = dynamic(() => import('react-map-gl'), { ssr: false });
const Source = dynamic(() => import('react-map-gl').then(mod => mod.Source), { ssr: false });
const Layer = dynamic(() => import('react-map-gl').then(mod => mod.Layer), { ssr: false });

export default function MapPlaceholder({ entries }) {
  const geoFeatures = entries.map(entry => {
    let lat = 50.0, lng = 10.0;
    if (entry.postalCode) {
      const zipNum = parseInt(entry.postalCode.substr(0, 2));
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
    <div className="h-64 w-full mb-4">
      <Map
        initialViewState={{ latitude: 51.0, longitude: 10.0, zoom: 5 }}
        style={{ width: '100%', height: '100%' }}
        mapStyle={`https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        <Source id="waitlist" type="geojson" data={geoJsonData}>
          <Layer
            id="waitlist-heat"
            type="heatmap"
            source="waitlist"
            paint={{
              'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
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
  );
}
