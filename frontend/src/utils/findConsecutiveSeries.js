export const findConsecutiveSeries = (arr) => {
  const result = arr.reduce((r, n) => {
    const lastSubArr = r[r.length - 1];

    if (!lastSubArr || lastSubArr[lastSubArr.length - 1] !== n - 1) {
      r.push([]);
    }

    r[r.length - 1].push(n);

    return r;
  }, []);

  return result;
};
