'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { ArrowSquareOut, CaretDown, ChartBar, House, UserCircle } from 'phosphor-react'
import { NavItems, NavLinkItem } from "@/core/objects/NavItems";
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full h-16 bg-gray-950/40 border-b border-zinc-800 shadow-lg flex items-center px-4 sticky top-0" ref={navRef}>
      {/* Left: Logo */}
      <div className="flex items-center gap-2 h-full">
        <Link href="/" className="flex items-center gap-2 h-full">
          <Image
            src="/i/misc/logo.webp"
            alt="App"
            width={48}
            height={48}
            className="rounded"
          />
          <span className="text-white font-bold text-lg">Aimi's App</span>
        </Link>
      </div>

      {/* Center: NavItems */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 items-center">
        {/* Home Button First (Baked) */}
        <div className="flex items-center gap-1 p-2 cursor-pointer transition hover:shadow-xl">
          <div className="flex items-center gap-1 hover:text-accent transition-colors justify-between">
            <House size={22} />
            <span className="font-medium">Home</span>
          </div>
        </div>

        {/* Leaderboard (Baked) */}
        <div className="flex items-center cursor-pointer transition hover:shadow-xl">
          <div className="flex items-center gap-1 hover:text-accent transition-colors justify-between">
            <ChartBar size={22} />
            <span className="font-medium">Leaderboard</span>
          </div>
        </div>

        {NavItems.map((item, i) => {
          if (item.type === "link") {
            return <NavLink key={i} item={item} />;
          }

          if (item.type === "dropdown") {
            const isOpen = openDropdown === item.name;
            return (
              <div key={i} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(isOpen ? null : item.name)
                  }
                  className={`flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                    isOpen ? "text-accent" : "hover:text-accent"
                  }`}
                >
                  {item.icon && (
                    <item.icon size={18} weight="duotone" />
                  )}
                  {item.name}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CaretDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 w-max min-w-[28rem] bg-zinc-950 border border-zinc-900 rounded shadow-lg z-50 p-3 grid grid-cols-2 gap-2"
                    >
                      {item.items.map((sub, j) => (
                        <NavLink key={j} item={sub} isDropdown />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Right: Auth */}
      <div className="flex items-center ml-auto">
        {session?.user?.avatar ? (
          <Link href="/profile">
            <Image
              src={session.user.avatar}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full border border-zinc-700 hover:opacity-90 transition cursor-pointer"
            />
          </Link>
        ) : (
          <button onClick={() => signIn('discord')}>
            <UserCircle size={32} className="text-zinc-400 hover:text-white transition cursor-pointer" />
          </button>
        )}
      </div>
    </nav>
  )
}

function isImage(icon?: any): icon is string {  return typeof icon === "string" && icon.endsWith(".png") };

function NavLink({
  item,
  isDropdown = false,
}: {
  item: NavLinkItem;
  isDropdown?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-1 p-2 rounded hover:bg-zinc-800 transition hover:shadow-xl">
      <div className="w-8 h-8 flex items-center justify-center rounded">
        {item.icon &&
          (isImage(item.icon) ? (
            <img
              src={item.icon}
              alt={item.name}
              className="w-6 h-6 object-contain"
            />
          ) : (
            <item.icon size={22} />
          ))}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-medium">{item.name}</span>
          {item.external && (
            <ArrowSquareOut size={14} className="ml-2 opacity-70" />
          )}
        </div>
        {item.description && (
          <p className="text-sm text-zinc-400 leading-tight">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className="block">
      {content}
    </Link>
  );
}