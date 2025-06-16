import confetti from 'canvas-confetti'

export function useConfetti(anchorId = 'confetti-anchor') {
  return () => {
    const anchor = document.getElementById(anchorId)
    if (!anchor) return

    const rect = anchor.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height) / window.innerHeight // bottom of the element

    confetti({
      particleCount: 200,
      spread: 100,
      origin: { x, y },
      startVelocity: 75,
      angle: 90,
      zIndex: 0,
      ticks: 80,
    })
  }
}
