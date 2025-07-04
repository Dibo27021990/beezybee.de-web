// app/not-found/page.jsx
export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff'
    }}>
      <h1 style={{ fontSize: 48, fontWeight: 'bold', color: 'red', marginBottom: 16 }}>404</h1>
      <p style={{ color: '#333', marginBottom: 32, textAlign: 'center' }}>
        Seite nicht gefunden.
      </p>
      <a href="/" style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: 4,
        textDecoration: 'none'
      }}>
        Zur Startseite
      </a>
    </div>
  );
}
