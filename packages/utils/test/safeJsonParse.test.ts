import { describe, expect, it } from 'vitest'
import { safeJsonParse } from '../src/json'

describe('safeJsonParse', () => {
  it('parses valid json', () => {
    const value = safeJsonParse<{ score: number }>('{"score": 2}', { score: 0 })

    expect(value).toEqual({ score: 2 })
  })

  it('returns fallback when json is invalid', () => {
    const fallback = { score: 0 }
    const value = safeJsonParse<{ score: number }>('invalid-json', fallback)

    expect(value).toBe(fallback)
  })
})
