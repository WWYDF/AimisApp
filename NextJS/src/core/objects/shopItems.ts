import { emoticon } from "./emotes";

export const shopItems = emoticon
  .filter((e) => typeof e.cost === 'number')
  .map((emote) => ({
    type: 'avatar',
    id: emote.id,
    label: emote.label,
    ext: emote.ext,
    cost: emote.cost,
}))
