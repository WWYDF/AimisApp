'use client'
import { BeerBottle, ChartBar, Coins, Question } from "phosphor-react"

const steps = [
  {
    title: 'Daily Questions',
    icon: <Question size={32} weight="fill" />,
    description: 'Every day at midnight UTC, our system randomly picks 5 pre-defined questions for the day.',
  },
  {
    title: 'Guess & Gamble',
    icon: <Coins size={32} weight="fill" />,
    description: 'You get a question right, you can either stop (lame) or continue with double-or-negative.',
  },
  {
    title: 'Win Big (trust)',
    icon: <BeerBottle size={32} weight="fill" />,
    description: "Score all 5 questions right in a day, and you've just earned yourself +800 points total.",
  },
  {
    title: 'Compete',
    icon: <ChartBar size={32} weight="duotone" />,
    description: "Climb the leaderboards by gambling properly. Just try not to lose it all in one day.",
  },
]

export default function TheProcess() {
  return (
    <section className="text-white pt-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-base font-semibold mb-2 uppercase text-accent">Trivia</h2>
        <h2 className="text-3xl font-bold mb-12">The Process</h2>
        <div className="grid gap-12 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4">
              <div className="bg-zinc-800 p-4 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
