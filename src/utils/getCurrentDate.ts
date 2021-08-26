import { dateCountry, dateOptions } from 'config';

export const getCurrentDate = (): string => {
  return new Date().toLocaleString(dateCountry, dateOptions);
};
