export default function range(a, b) {
  const from = b ? a : 0
  const to = b || a - 1
  return new Array(to - from + 1).fill(0).map((_, i) => i + from)
}
