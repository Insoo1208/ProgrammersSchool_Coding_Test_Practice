function solution(a, b, c, d) {
  const map = new Map();
  for (const data of [a, b, c, d]) {
    map.set(data, (map.get(data) || 0) + 1);
  }

  const sortedArr = [...map].sort((a, b) => {if (a[1] === b[1]) return b[0] - a[0]; else return b[1] - a[1]});

  if (map.size === 1) return 1111 * sortedArr[0][0];
  else if (map.size === 3) return sortedArr[1][0] * sortedArr[2][0];
  else if (map.size === 4) return sortedArr[3][0];
  else if (sortedArr[0][1] === 3) return (10 * sortedArr[0][0] + sortedArr[1][0]) ** 2;
  else return (sortedArr[0][0] + sortedArr[1][0]) * (sortedArr[0][0] - sortedArr[1][0]);
}

console.log(solution(2,2,2,2));
console.log(solution(4,1,4,4));
console.log(solution(6,3,3,6));
console.log(solution(2,5,2,6));
console.log(solution(6,4,2,5));