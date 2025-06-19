'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import LiftedButton from '../LiftedButton'

export default function WhyMade() {
  const router = useRouter()

  return (
    <section className="relative bg-gray-dark text-white pt-36 pb-24 px-6 overflow-hidden">
      {/* Top gradient overlay fading from gray-800 to gray-dark */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-gray-dark pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl pt-36 pb-12 mx-auto text-center">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-bold mb-6'>Why?</h2>
          <p className='text-zinc-400 text-lg mb-8 leading-relaxed'>
            Just got bored and had some ideas for some goofy games to waste time on with the gang.
            Then @OmegaStuck was planning a stream surrounding OS content and wanted some ideas.
            So, I got to work. This site was thrown together in ~4 days, and is just for funsies. :)
          </p>

          <LiftedButton
            key="start"
            variant="accent"
            size="lg"
            onClick={() => router.push('/trivia')}
          >
            Play Trivia
          </LiftedButton>
        </motion.div>
      </div>
    </section>
  )
}
