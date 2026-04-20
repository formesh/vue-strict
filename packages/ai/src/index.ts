export interface StrategyResult {
  score: number
  reason: string
}

export function runStrategy(payload: string): StrategyResult {
  let data: Record<string, unknown> = {}
  try {
    data = JSON.parse(payload) as Record<string, unknown>
  } catch {
    data = {}
  }
  const score = typeof data.score === 'number' ? data.score : 0
  return { score, reason: score > 0 ? 'positive' : 'neutral' }
}
