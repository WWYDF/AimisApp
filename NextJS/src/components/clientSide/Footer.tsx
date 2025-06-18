'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 text-2xs md:text-sm text-gray-400 py-3 px-6 flex items-center justify-between bg-gray-950/40">
      <div id="confetti-anchor" className="fixed bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 z-0 pointer-events-none" />
      <Link href='https://github.com/WWYDF' className="text-left">&copy; {new Date().getFullYear()} blals</Link>
      <span className="text-right">Not affiliated with Odyssey Interactive.</span>
    </footer>
  );
}