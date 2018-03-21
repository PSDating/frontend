export const arrayRange = n => {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr;
};

export const nodeListToArray = arr => [].slice.call(arr);
