import { describe, expect, it } from 'vitest'
import { classNames } from './App'

describe('classNames', () => {
    it('has classes', () => {
        expect(classNames([])).toEqual('')
    })
})