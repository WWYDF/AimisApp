'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { shopItems } from '@/core/objects/shopItems'
import { getEmotePath } from '@/core/utils/pathResolver'
import { useToast } from '../Toast'

type ShopItem = (typeof shopItems)[number]

export default function ShopClient({
  initialPoints,
  availableItems,
}: {
  initialPoints: number
  availableItems: ShopItem[]
}) {
  const [points, setPoints] = useState(initialPoints)
  const [items, setItems] = useState(availableItems)
  const [selected, setSelected] = useState<ShopItem | null>(null)
  const toast = useToast();

  const handlePurchase = async (item: ShopItem) => {
    if (points < item.cost) {
      toast('Not enough points', 'error')
      return
    }
  
    const res = await fetch('/api/shop/buy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId: item.id }),
    })
  
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      toast(data.error ?? 'Something went wrong', 'error')
      return
    }
  
    // Success
    setPoints((prev) => prev - item.cost)
    setItems((prev) => prev.filter((i) => i.id !== item.id))
    setSelected(null)
    toast('Item purchased!', 'success')
  }
  

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Avatar Shop</h1>
      <p className="mb-6 text-accent">Points: {points}</p>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="relative group aspect-square overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <Image
              src={getEmotePath(item.id) ?? ''}
              alt={item.label}
              width={80}
              height={80}
              className="w-full h-full object-contain rounded-full"
              unoptimized
            />
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-xs min-w-[80px] px-2 py-0.5 rounded-lg border
                ${points >= item.cost
                  ? 'bg-green-900 border-green-800 text-green-200'
                  : 'bg-red-900 border-red-800 text-red-200'}
              `}
            >
              {item.cost} pts
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 text-white rounded-xl p-6 w-full max-w-sm text-center space-y-4"
            >
              <Image
                src={getEmotePath(selected.id) ?? ''}
                alt={selected.label}
                width={96}
                height={96}
                className="mx-auto"
                unoptimized
              />
              <h2 className="text-xl font-bold">{selected.label}</h2>
              <p>
                Purchase for{' '}
                <span className="text-accent font-semibold">{selected.cost} points</span>?
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-1.5 rounded bg-zinc-700 cursor-pointer transition hover:bg-zinc-600 text-sm"
                >
                  Cancel
                </button>
                <button
                  disabled={points < selected.cost}
                  onClick={() => handlePurchase(selected)}
                  className="px-4 py-1.5 rounded bg-accent-muted cursor-pointer transition hover:bg-accent-muted/80 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Buy
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
