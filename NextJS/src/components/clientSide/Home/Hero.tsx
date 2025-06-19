'use client'
import { useRouter } from "next/navigation";
import LiftedButton from "../LiftedButton";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-gray-900 text-white py-36">
      {/* Background image layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 scale-110 blur-xs bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/i/map/AiMiApp.webp')" }}
        />
      </div>
  
      {/* Dark overlay if needed */}
      <div className="absolute inset-0 bg-gray-900 opacity-70" />

      {/* Gradient fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-gray-900" />
  
      {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">Omega Strikers Minigames</h1>
        <p className="text-lg text-zinc-300 mb-6">Earn and GAMBLE your points in double-or-negative!</p>
        <LiftedButton
          key="start"
          variant="accent"
          size="lg"
          onClick={() => router.push('/leaderboards')}
        >
          View Leaderboard
        </LiftedButton>
      </div>
    </section>
  )
}
