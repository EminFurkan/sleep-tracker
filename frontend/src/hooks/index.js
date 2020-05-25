import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth
} from 'date-fns';

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

  const findCheckedDates = (dates, timespan) => {
    const userStreak = dates.map(({ date }) => new Date(date).getDate());
    const checkedDates = userStreak.filter((date) =>
      timespan === 'week'
        ? getWeek().includes(date)
        : timespan === 'month'
        ? getMonth().includes(date)
        : null
    );
    return checkedDates;
  };

  const getMonth = () => {
    const start = format(startOfMonth(new Date()), 'dd');
    const end = format(endOfMonth(new Date()), 'dd');
    const currentMonth = [];

    for (let i = Number(start); i <= end; i++) {
      currentMonth.push(i);
    }
    return currentMonth;
  };

  return { getMonth, getWeek, getToday, findCheckedDates };
};
