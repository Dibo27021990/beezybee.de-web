export default function MiniQuiz() {
  return (
    <div className="p-4 mt-10 bg-white border rounded shadow">
      <h3 className="font-semibold mb-2">Bist du bereit, Helferbiene zu werden?</h3>
      <p>Stell dir vor: Eine ältere Dame braucht Hilfe beim Tragen. Bist du dabei?</p>
      <div className="mt-2 flex gap-4">
        <button className="bg-[#333] text-white px-4 py-2 rounded">Na klar!</button>
        <button className="bg-gray-200 px-4 py-2 rounded">Vielleicht später</button>
      </div>
    </div>
  );
}
