function solution(polynomial) {
  const nums = polynomial.split(" ").reduce((acc, cur) => {
    if (cur === 'x') { acc[0]++; return acc; }
    else if (cur.includes('x')) { acc[0] += +cur.slice(0, -1); return acc; }
    else if (!isNaN(cur)) { acc[1] += +cur; return acc; }
    else return acc;
  }, [0, 0]);

  if (!nums[1]) return `${nums[0] === 1 ? '' : nums[0]}x`;
  else if (!nums[0]) return `${nums[1]}`;
  else return `${nums[0] === 1 ? '' : nums[0]}x + ${nums[1]}`;
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));
console.log(solution("x"));
console.log(solution("2 + 3"));
console.log(solution("1x + x"));
console.log(solution("2 + 3 + 3x + 5x + 8 + 12x"));