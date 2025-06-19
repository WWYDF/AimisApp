'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WarningCircle, X } from 'phosphor-react'

type Incident = {
  title: string
  content: string
  createdDate: string
}

export default function UptimeToast() {
  const [incident, setIncident] = useState<Incident | null>(null)
  const [minimized, setMinimized] = useState(false)

  useEffect(() => {
    const fetchIncident = async () => {
      try {
        const res = await fetch('https://status.devante.net/api/status-page/aimisapp')
        const data = await res.json()
        const currentIncident = data?.incident

        if (currentIncident && currentIncident.content) {
          setIncident({
            title: currentIncident.title,
            content: currentIncident.content,
            createdDate: currentIncident.createdDate,
          })
        }
      } catch (err) {
        console.error('Failed to fetch incident data:', err)
      }
    }

    fetchIncident()
  }, [])

  if (!incident) return null

  return (
    <AnimatePresence>
      {!minimized ? (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm bg-zinc-950 border border-secondary-border p-4 rounded-xl shadow-lg"
        >
          <div className="flex justify-between items-start">
            <h2 className="flex items-center text-base font-semibold text-red-500">
              <WarningCircle size={20} className="mr-2" />
              Incident Reported
            </h2>
            <button
              onClick={() => setMinimized(true)}
              className="text-subtle hover:text-white cursor-pointer transition-colors"
              aria-label="Minimize"
            >
              <X size={16} />
            </button>
          </div>

          <div
            className="text-subtle text-sm mt-2 cursor-pointer"
            onClick={() => window.open('https://status.devante.net/status/aimisapp', '_blank')}
          >
            <strong className="text-accent text-sm block">{incident.title}</strong>
            <p className="line-clamp-2">{incident.content}</p>
            <span className="text-xs text-subtle block mt-1">
              Started: {new Date(incident.createdDate).toLocaleString()} UTC
            </span>
          </div>
        </motion.div>
      ) : (
        <motion.button
          key="minimized"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={() => setMinimized(false)}
          className="fixed bottom-4 right-4 z-50 bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1"
        >
          <WarningCircle size={18} />
          <span className='text-sm' >Incident Reported</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}