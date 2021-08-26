export const sortDate = (date1: Date, date2: Date): number => {
  const date1time = new Date(date1).getTime();
  const date2time = new Date(date2).getTime();

  return date1time - date2time;
};
