import { format, startOfWeek, endOfWeek } from 'date-fns';

export const useDates = () => {
  const getWeek = () => {
    const start = format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'dd');
    const end = format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'dd');
    const currentWeek = [];

    for (let i = Number(start); i <= end; i++) {
      currentWeek.push(i);
    }
    return currentWeek;
  };

  const getToday = () => {
    const today = format(new Date(), 'dd');
    return Number(today);
  };

  const findCheckedDates = (dates) => {
    const userStreak = dates.map(({ date }) => new Date(date).getDate());
    const checkedDates = userStreak.filter((date) =>
      getWeek().includes(date)
    );
    return checkedDates;
  };

  return { getWeek, getToday, findCheckedDates };
};
