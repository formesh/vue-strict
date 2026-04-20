<script setup lang="ts">
import { TheWelcome } from '@repo/ui'
import { safeJsonParse } from '@repo/utils'
import { runStrategy } from '@repo/ai'

const payload = '{"score": 2}'
const parsed = safeJsonParse<{ score: number }>(payload, { score: 0 })
const strategyResult = runStrategy(JSON.stringify(parsed))
</script>

<template>
  <main>
    <TheWelcome />
    <p data-testid="strategy-result">strategy: {{ strategyResult.reason }} ({{ strategyResult.score }})</p>
  </main>
</template>
