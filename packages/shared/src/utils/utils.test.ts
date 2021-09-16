import { getIsValidEmail, getOnlyNumber, isNumber } from './utils';

describe('utils', () => {
  describe('isNumber', () => {
    it('returns true', () => {
      expect(isNumber('123')).toBe(true);
      expect(isNumber(123)).toBe(true);
      expect(isNumber('0')).toBe(true);
      expect(isNumber(0)).toBe(true);
    });

    it('returns false', () => {
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber('123a')).toBe(false);
      expect(isNumber({})).toBe(false);
    });
  });

  describe('getOnlyNumber', () => {
    it('from strings', () => {
      expect(getOnlyNumber('010-1111-2222')).toBe('01011112222');
    });

    it('from numbers', () => {
      expect(getOnlyNumber(1011112222)).toBe('1011112222');
    });
  });

  describe('getIsValidEmail', () => {
    it('from true', () => {
      expect(getIsValidEmail('foo@bar.com')).toBe(true);
    });

    it('from false', () => {
      expect(getIsValidEmail('foo@bar')).toBe(false);
      expect(getIsValidEmail('foobar.com')).toBe(false);
      expect(getIsValidEmail('@bar.com')).toBe(false);
      expect(getIsValidEmail('foo@.com')).toBe(false);
    });
  });
});
