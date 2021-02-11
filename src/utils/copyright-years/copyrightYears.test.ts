import { advanceTo, clear } from 'jest-date-mock';
import { format, addYears } from 'date-fns';

import { copyrightYears } from './copyrightYears';

describe('copyrightYears', () => {
  test('if sinceYear and untilYear given, return "{sinceYear} - {untilYear}"', () => {
    expect(copyrightYears(2001, 2020)).toBe('2001 - 2020');
  });

  test('if same sinceYear and untilYear given, return "{untilYear}"', () => {
    expect(copyrightYears(2020, 2020)).toBe('2020');
  });

  test('if sinceYear is only given, return "{sinceYear} - {thisYear}"', () => {
    advanceTo(addYears(new Date(), 5));
    const afterFiveYears = format(new Date(), 'yyyy');
    expect(copyrightYears(2019)).toBe(`2019 - ${afterFiveYears}`);
    clear();
  });

  test('if sinceYear is bigger than untilYear,  return Error', () => {
    expect(() => copyrightYears(2018, 2011)).toThrowError();
  });

  test('if sinceYear which is bigger than this year is only given, throw Error', () => {
    const afterFiveYears = new Date().getFullYear() + 5;
    expect(() => copyrightYears(afterFiveYears)).toThrowError();
  });
});
