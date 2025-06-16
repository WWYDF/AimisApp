import TriviaClient from "@/components/clientSide/Trivia/TriviaClient"

export default async function TriviaPage() {
  const res = await fetch('http://localhost:12244/v1/trivia', {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch trivia')

  const { id, question, type, choices, image } = await res.json()

  return (
    <TriviaClient trivia={{ id, question, type, choices, image }} />
  )
}