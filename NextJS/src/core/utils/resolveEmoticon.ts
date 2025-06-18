import { emoticon } from "../objects/emotes"

export function getEmotePath(id: string | null | undefined): string | null {
  if (!id) return null

  const match = emoticon.find((e) => e.id === id)
  return match ? `/i/emoticon/${match.id}.${match.ext}` : null
}
