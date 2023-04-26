function solution(array) {
  return [...array.join('')].reduce((a, c) => {
    if (c === '7') return a += 1;
    else return a;
  }, 0);
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));