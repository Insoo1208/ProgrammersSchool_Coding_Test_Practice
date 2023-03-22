function solution(n, m, section) {
  let answer = 0;
  section.reduce((acc, cur) => {
    if (cur > acc) {
      acc = cur + m - 1;
      answer++;
    }
    return acc;
  }, 0);
  return answer;
}

console.log(solution(8,	4, [2, 3, 6]));
console.log(solution(5,	4, [1, 3]));
console.log(solution(5, 2, [1, 3, 4]));
