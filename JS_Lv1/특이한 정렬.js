function solution(numlist, n) {
  const map = new Map();

  numlist.forEach(el => {
    map.set(el, Math.abs(el - n));
  });

  return [...map]
    .sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1])
    .reduce((acc, cur) => {
      acc.push(cur[0]);
      return acc;
    }, []);

  // return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));