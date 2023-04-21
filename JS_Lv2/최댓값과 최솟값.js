function solution(s) {
  const sArray = s.split(' ').sort((a, b) => a - b);
  return `${sArray[0]} ${sArray.at(-1)}`;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));