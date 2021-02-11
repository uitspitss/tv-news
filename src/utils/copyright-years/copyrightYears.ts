import { format } from 'date-fns';

export const copyrightYears = (sinceYear: number, untilYear?: number) => {
  if (untilYear) {
    if (sinceYear > untilYear)
      throw new Error('untilYear should be smaller than untilYear.');
    if (sinceYear === untilYear) return `${sinceYear}`;
  } else {
    const thisYear = format(new Date(), 'yyyy');
    if (sinceYear > Number(thisYear)) {
      throw new Error(
        'sinceYear should be smaller than or equal to this year.',
      );
    }
    if (sinceYear === Number(thisYear)) return `${sinceYear}`;
    if (sinceYear < Number(thisYear)) return `${sinceYear} - ${thisYear}`;
  }

  return `${sinceYear} - ${untilYear}`;
};
