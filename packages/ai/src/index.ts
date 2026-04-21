import { safeJsonParse } from '@repo/utils'

export interface StrategyResult {
  score: number
  reason: string
}

export interface Strategy<TInput, TResult> {
  name: string
  run(input: TInput): TResult
}

type ScoreInput = Record<string, unknown>

const defaultScoreStrategy: Strategy<ScoreInput, StrategyResult> = {
  name: 'default-score',
  run(input) {
    const score = typeof input.score === 'number' ? input.score : 0
    return { score, reason: score > 0 ? 'positive' : 'neutral' }
  },
}

export function runStrategy(
  payload: string,
  strategy: Strategy<ScoreInput, StrategyResult> = defaultScoreStrategy,
): StrategyResult {
  const data = safeJsonParse<ScoreInput>(payload, {})
  return strategy.run(data)
}
