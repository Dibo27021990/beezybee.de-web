// app/not-found.jsx
'use client';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 – Seite nicht gefunden</h1>
      <p className="text-gray-600 text-center">
        Die Seite existiert leider nicht oder wurde verschoben.
      </p>
    </div>
  );
}
