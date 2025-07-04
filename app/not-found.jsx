import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Helperbee Logo"
        width={100}
        height={100}
        style={{ marginBottom: 16 }}
      />
      <h1 style={{ fontSize: 48, fontWeight: 'bold', color: 'red', marginBottom: 16 }}>
        404
      </h1>
      <p style={{ color: '#333', marginBottom: 32, textAlign: 'center' }}>
        Seite nicht gefunden.
      </p>
      <Link href="/">
        <a
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: 4,
            textDecoration: 'none',
          }}
        >
          Zur Startseite
        </a>
      </Link>
    </div>
  );
}
