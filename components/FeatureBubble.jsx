export default function FeatureBubbles() {
  const features = [
    { title: "Fair bezahlt", description: "Unsere KI schützt vor Dumpingpreisen." },
    { title: "Mit Herz & Hirn", description: "Wir vermitteln, wer wirklich passt." },
    { title: "Kein Stress", description: "Einmal buchen, alles erledigt." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
      {features.map((f, i) => (
        <div key={i} className="p-4 bg-white rounded shadow text-center">
          <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </div>
  );
}
