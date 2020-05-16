import { format, startOfWeek, endOfWeek } from 'date-fns';

export const getDates = () => {
  const start = format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'dd');
  const end = format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'dd');
  const dates = [];

  for (let i = Number(start); i <= end; i++) {
    dates.push(i);
  }

  return dates;
};

export const getCurrent = () => {
  const today = format(new Date(), 'dd');
  return Number(today);
};
