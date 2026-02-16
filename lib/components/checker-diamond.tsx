type SquareSize = 30 | 24 | 20

const SQUARE_STYLES: Record<SquareSize, { color: string }> = {
  30: { color: "#FED60E" },
  24: { color: "#FED60EB3" },
  20: { color: "#FED60E80" },
}

// Grid cell centers (computed from the original Figma export).
// Each entry is [centerX, centerY] within a 210×210 container.
const CELL_CENTERS: [number, number][] = [
  [42, 62],
  [72, 36],
  [12, 96],
  [72, 92],
  [132, 32],
  [42, 126],
  [102, 72],
  [132, 96],
  [192, 92],
  [12, 156],
  [72, 162],
  [102, 126],
  [162, 72],
  [162, 132],
  [42, 186],
  [102, 192],
  [132, 162],
  [192, 162],
  [72, 212],
  [132, 214],
  [162, 186],
]

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

function assignSizes(seed: number): SquareSize[] {
  const rand = seededRandom(Math.abs(Math.round(seed)) || 1)
  const total = CELL_CENTERS.length
  const sizes: SquareSize[] = new Array(total)

  // Shuffle indices to pick at least 7 for the 30x30 size
  const indices = Array.from({ length: total }, (_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }

  // First 7 shuffled indices get 30x30
  const bigSet = new Set(indices.slice(0, 7))

  for (let i = 0; i < total; i++) {
    if (bigSet.has(i)) {
      sizes[i] = 30
    } else {
      const r = rand()
      sizes[i] = r < 0.5 ? 24 : 20
    }
  }

  return sizes
}

interface CheckerDiamondProps {
  seed: number
}

export function CheckerDiamond({ seed }: CheckerDiamondProps) {
  const sizes = assignSizes(seed)

  return (
    <div
      style={{
        boxSizing: "border-box",
        rotate: "180deg",
        position: "relative",
        width: "210px",
        height: "210px",
      }}
    >
      {CELL_CENTERS.map(([cx, cy], i) => {
        const size = sizes[i]
        const half = size / 2
        const x = cx - half
        const y = cy - half

        return (
          <div
            key={i}
            style={{
              backgroundColor: SQUARE_STYLES[size].color,
              boxSizing: "border-box",
              height: `${size}px`,
              left: 0,
              position: "absolute",
              rotate: "270deg",
              top: 0,
              transformOrigin: "0% 0%",
              translate: `${x}px ${y}px`,
              width: `${size}px`,
            }}
          />
        )
      })}
    </div>
  )
}
