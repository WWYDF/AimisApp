'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastType = 'success' | 'error' | 'info';

const ToastContext = createContext<(message: string, type?: ToastType) => void>(() => {});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={(message, type = 'info') => setToast({ message, type })}>
      {children}
      <AnimatePresence>
        {toast && (
          <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-2 rounded-xl shadow-xl pointer-events-auto
                ${toast.type === 'success' ? 'bg-green-500' : ''}
                ${toast.type === 'error' ? 'bg-red-500' : ''}
                ${toast.type === 'info' ? 'bg-accent-muted' : ''}
              `}
            >
              {toast.message}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}