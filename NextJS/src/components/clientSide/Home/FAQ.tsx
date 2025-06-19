'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rules = [
  {
    title: 'Double Or Negative',
    subtitle: 'Similar to Double-Or-Nothing, but if you fail you LOSE that amount of points based on your original total. So if you start at 0 points, and fail Q5, you end up with -800 points lol.',
    image: '/i/feature/doubleornothing.webp',
  },
  {
    title: 'Points',
    subtitle: "Points are the currency of the site. You can either keep your points to climb the ranks, or you can spend them on funny hahas for your profile. Don't think about it too hard. << NO REAL MONEY IS USED >>",
    image: '/i/feature/points.webp',
  },
  {
    title: 'Sources',
    subtitle: 'All of our Questions are manually created, with no AI involved. 99% of the time, our source is the Official Wiki. If you think a Question/Answer is wrong, PLEASE reach out to me on Discord!!',
    image: '/i/feature/wiki.webp',
  },
  {
    title: 'Games',
    subtitle: 'Currently we just have trivia, with plans to expand into a Wordle clone. If you have any ideas for future endeavours, send em our way!',
    image: '/i/feature/reqalt.webp',
  },
]

export default function FAQ() {
  const [selected, setSelected] = useState(0)

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-base font-semibold mb-2 uppercase text-accent">FAQ</h2>
        <h2 className="text-3xl font-bold mb-12">What does this do?</h2>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Chip Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-[260px]">
          {rules.map((rule, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-6 py-4 rounded-2xl cursor-pointer font-semibold transition-colors duration-200
                ${
                  selected === i
                    ? 'bg-accent-muted text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {rule.title}
            </button>
          ))}
        </div>

        {/* Viewer */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={rules[selected].title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="bg-gray-dark rounded-2xl border border-gray-800 p-8"
            >
              <h3 className="text-3xl font-bold mb-2 text-white">{rules[selected].title}</h3>
              <p className="text-gray-400 mb-6 text-base">{rules[selected].subtitle}</p>
              <img
                src={rules[selected].image}
                alt={rules[selected].title}
                className="rounded-lg w-full max-w mx-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
