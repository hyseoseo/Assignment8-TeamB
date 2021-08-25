import { dateCountry, dateOptions } from 'config';

export const getCurrentDate = () => {
  return new Date().toLocaleString(dateCountry, dateOptions);
};
