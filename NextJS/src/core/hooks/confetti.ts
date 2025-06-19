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

export function fullPageConfetti(anchorId = 'confetti-anchor') {
  return () => {
    const anchor = document.getElementById(anchorId)
    if (!anchor) return

    const rect = anchor.getBoundingClientRect()
    const y = (rect.top + rect.height) / window.innerHeight // bottom of anchor

    // Bottom left
    confetti({
      particleCount: 100,
      angle: 45, // Toward top-right
      spread: 70,
      origin: { x: 0, y },
      startVelocity: 70,
      zIndex: 0,
    })

    // Bottom right
    confetti({
      particleCount: 100,
      angle: 135, // Toward top-left
      spread: 70,
      origin: { x: 1, y },
      startVelocity: 70,
      zIndex: 0,
    })

    // Center upward finale
    confetti({
      particleCount: 100,
      angle: 90, // straight up
      spread: 80,
      origin: { x: 0.5, y },
      startVelocity: 100,
      zIndex: 0,
    })
  }
}