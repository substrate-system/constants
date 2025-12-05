import { test } from '@substrate-system/tapzero'
import { EM_DASH } from '../src/index.js'

test('exports', async t => {
    t.ok(EM_DASH, 'should export an em dash')
})

test('all done', () => {
    // @ts-expect-error test
    window.testsFinished = true
})
