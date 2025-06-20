import { hexToRGBA } from "@/core/utils/colors";

export default function renderBadges(badges: { id: string; name: string; color?: string | null; icon?: string | null }[]) {
  if (!badges || badges.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 md:ml-1">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="px-2 py-0.5 rounded-md text-xs font-semibold text-white"
          style={{
            backgroundColor: hexToRGBA(badge.color ?? '#444444', 0.7),
          }}
        >
          {/* {badge.icon && <span className="mr-1">{badge.icon}</span>} */}
          {badge.name}
        </div>
      ))}
    </div>
  )
}
