import { sum } from './sum';

describe ('sum', () => {
  it('returns 2 for 3 and -1', () => {
    expect(sum (3, -1)).toBe(2)
  })
})