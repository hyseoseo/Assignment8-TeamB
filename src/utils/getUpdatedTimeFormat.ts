import { TO_MILISECONDS } from 'config';

export const getUpdatedTimeFormat = (date: Date): string => {
  const now: number = new Date().getTime();
  const updated: number = new Date(date).getTime();
  const diff: number = now - updated;

  if (diff < TO_MILISECONDS.hour) {
    return `${Math.floor(diff / TO_MILISECONDS.minute)} minutes`;
  } else if (diff < TO_MILISECONDS.day) {
    return `${Math.floor(diff / TO_MILISECONDS.hour)} hours`;
  } else if (diff < TO_MILISECONDS.month) {
    return `${Math.floor(diff / TO_MILISECONDS.day)} days`;
  } else if (diff < TO_MILISECONDS.year) {
    return `${Math.floor(diff / TO_MILISECONDS.month)} month`;
  }
  return `${Math.floor(diff / TO_MILISECONDS.year)} years`;
};
