import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5 bg-white">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-800 mb-8 text-center">
        Seite nicht gefunden.
      </p>
      <Link
        href="/"
        className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
