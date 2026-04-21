import { describe, expect, it } from 'vitest'
import { runStrategy, type Strategy, type StrategyResult } from '../src/index'

describe('runStrategy', () => {
  it('returns positive when score is greater than 0', () => {
    const result = runStrategy('{"score": 3}')

    expect(result).toEqual({
      score: 3,
      reason: 'positive',
    })
  })

  it('returns neutral when score is missing', () => {
    const result = runStrategy('{"name":"demo"}')

    expect(result).toEqual({
      score: 0,
      reason: 'neutral',
    })
  })

  it('returns neutral fallback when payload is invalid json', () => {
    const result = runStrategy('not-json')

    expect(result).toEqual({
      score: 0,
      reason: 'neutral',
    })
  })

  it('supports injecting custom strategy implementation', () => {
    const custom: Strategy<Record<string, unknown>, StrategyResult> = {
      name: 'custom',
      run(input) {
        const base = typeof input.score === 'number' ? input.score : 0
        const score = base * 2
        return { score, reason: score > 5 ? 'high' : 'low' }
      },
    }

    const result = runStrategy('{"score": 3}', custom)

    expect(result).toEqual({
      score: 6,
      reason: 'high',
    })
  })
})
