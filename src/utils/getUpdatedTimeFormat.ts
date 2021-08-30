const TO_MILLISECONDS = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000,
};

export const getUpdatedTimeFormat = (date: Date): string => {
  const now: number = new Date().getTime();
  const updated: number = new Date(date).getTime();
  const diff: number = now - updated;

  if (diff < TO_MILLISECONDS.hour) {
    return `${Math.floor(diff / TO_MILLISECONDS.minute)} minutes`;
  } else if (diff < TO_MILLISECONDS.day) {
    return `${Math.floor(diff / TO_MILLISECONDS.hour)} hours`;
  } else if (diff < TO_MILLISECONDS.month) {
    return `${Math.floor(diff / TO_MILLISECONDS.day)} days`;
  } else if (diff < TO_MILLISECONDS.year) {
    return `${Math.floor(diff / TO_MILLISECONDS.month)} month`;
  }
  return `${Math.floor(diff / TO_MILLISECONDS.year)} years`;
};
