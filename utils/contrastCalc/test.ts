/**
 * Test cases for contrast calculations
 * Run with: npx tsx utils/contrastCalc/test.ts
 */

import { calculateWCAGContrast } from './wcagContrast'
import { calculateAPCAContrast } from './apcaContrast'

console.log('🧪 Testing Contrast Calculations\n')
console.log('=' .repeat(60))

const testCases = [
  {
    name: 'BLACK on WHITE',
    foreground: '#000000',
    background: '#FFFFFF',
    expectedWCAG: 21.0,
    expectedAPCA: 106,
  },
  {
    name: 'WHITE on BLACK',
    foreground: '#FFFFFF',
    background: '#000000',
    expectedWCAG: 21.0,
    expectedAPCA: -106,
  },
  {
    name: 'GRAY on WHITE',
    foreground: '#777777',
    background: '#FFFFFF',
    expectedWCAG: 4.48,
    expectedAPCA: 56,
  },
  {
    name: 'RED on WHITE',
    foreground: '#FF0000',
    background: '#FFFFFF',
    expectedWCAG: 3.99,
    expectedAPCA: 42,
  },
]

testCases.forEach((test) => {
  console.log(`\n📊 ${test.name}`)
  console.log(`   Foreground: ${test.foreground}`)
  console.log(`   Background: ${test.background}`)

  const wcag = calculateWCAGContrast(test.foreground, test.background)
  const apca = calculateAPCAContrast(test.foreground, test.background)

  console.log(`\n   WCAG 2.2:`)
  console.log(`   - Ratio: ${wcag.ratio.toFixed(2)} (expected: ~${test.expectedWCAG})`)
  console.log(`   - Normal: ${wcag.level.normal}`)
  console.log(`   - Large: ${wcag.level.large}`)

  console.log(`\n   APCA:`)
  console.log(`   - Lc: ${apca.lc.toFixed(1)} (expected: ~${test.expectedAPCA})`)
  console.log(`   - Normal: ${apca.level.normal}`)
  console.log(`   - Large: ${apca.level.large}`)

  // Verify accuracy
  const wcagAccurate = Math.abs(wcag.ratio - test.expectedWCAG) < 0.5
  const apcaAccurate = Math.abs(apca.lc - test.expectedAPCA) < 10

  if (wcagAccurate && apcaAccurate) {
    console.log(`   ✅ PASS`)
  } else {
    console.log(`   ❌ FAIL`)
    if (!wcagAccurate) console.log(`      - WCAG off by ${Math.abs(wcag.ratio - test.expectedWCAG).toFixed(2)}`)
    if (!apcaAccurate) console.log(`      - APCA off by ${Math.abs(apca.lc - test.expectedAPCA).toFixed(1)}`)
  }

  console.log(`   ${'─'.repeat(56)}`)
})

console.log('\n' + '='.repeat(60))
console.log('✨ Test complete\n')
