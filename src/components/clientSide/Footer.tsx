'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 text-2xs md:text-sm text-gray-400 py-3 px-6 flex items-center justify-between bg-gray-950/40">
      <Link href='https://github.com/WWYDF' className="text-left">&copy; {new Date().getFullYear()} blals</Link>
    </footer>
  );
}