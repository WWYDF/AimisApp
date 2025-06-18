'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { ArrowSquareOut, CaretDown, ChartBar, House, UserCircle } from 'phosphor-react'
import { NavItems, NavLinkItem } from "@/core/objects/NavItems";
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation'
import { getEmotePath } from '@/core/utils/resolveEmoticon'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession()
  const router = useRouter();

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
      <button
        className="flex items-center gap-2 h-full cursor-pointer"
        onClick={() => {
          router.push('/')
          setOpenDropdown(null);
        }}
      >
        <Image
          src="/i/misc/logo.webp"
          alt="App"
          width={48}
          height={48}
          className="rounded"
        />
        <span className="text-white font-bold text-lg">Aimi's App</span>
      </button>

      {/* Center: NavItems */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 items-center">
        
        {/* Home Button First (Baked) */}
        <button
          className="flex items-center gap-1 hover:text-accent cursor-pointer transition-colors justify-between"
          onClick={() => {
            router.push('/')
            setOpenDropdown(null);
          }}
        >
          <House size={22} />
          <span className="font-medium">Home</span>
        </button>

        {/* Leaderboard (Baked) */}
        <button
          className="flex items-center gap-1 hover:text-accent cursor-pointer transition-colors justify-between"
          onClick={() => {
            router.push('/leaderboards')
            setOpenDropdown(null);
          }}
        >
          <ChartBar size={22} />
          <span className="font-medium">Leaderboard</span>
        </button>

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
                        <NavLink key={j} item={sub} isDropdown closeDropdown={() => setOpenDropdown(null)} />
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
          <Link href="/user">
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
  closeDropdown,
}: {
  item: NavLinkItem;
  isDropdown?: boolean;
  closeDropdown?: () => void;
}) {
  const router = useRouter();

  const content = (
    <div className="flex gap-3 p-2 rounded hover:bg-zinc-800 transition cursor-pointer hover:shadow-xl text-left">
      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center self-center shrink-0">
        {item.icon && (
          isImage(item.icon) ? (
            <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
          ) : (
            <item.icon size={22} />
          )
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <span className="font-medium text-sm leading-snug">{item.name}</span>
        {item.description && (
          <span className="text-zinc-400 text-xs leading-snug">{item.description}</span>
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
    <button
      className="block"
      onClick={() => {
        router.push(item.href)
        if (closeDropdown) closeDropdown()
      }}
    >
      {content}
    </button>
  );
}