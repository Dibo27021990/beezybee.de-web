'use client';

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white py-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Helperbee – All rights reserved.</p>
    </footer>
  );
}
