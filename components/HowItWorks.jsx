'use client';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-10">{t('howItWorks.title')}</h2>
      <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto text-left">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">1. Aufträge erstellen</h3>
          <p>
            Erstelle Suchanfragen oder biete Hilfe an – verdiene dabei Geld & lerne Menschen kennen.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">2. KI erledigt den Rest</h3>
          <p>
            Unsere intelligente KI schlägt automatisch faire Preise & passende Helfer:innen vor.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">3. Belohnung erhalten</h3>
          <p>
            Gib oder erhalte Hilfe, werde bewertet, sammle BeeCoins – vielleicht wirst du Biene des Monats!
          </p>
        </div>
      </div>
    </section>
  );
}
