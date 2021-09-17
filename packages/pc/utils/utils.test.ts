import { testReturnTrue } from './utils';

describe('utils', () => {
  describe('testReturnTrue', () => {
    it('returns true', () => {
      expect(testReturnTrue()).toBe(true);
    });
  });
});
