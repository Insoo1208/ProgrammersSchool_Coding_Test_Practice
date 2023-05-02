function solution(lines) {
  var answer = 0;
  const map = new Map();

  for (const line of lines) {
    for (let i = line[0]; i < line[1]; i++) {
      map.set(`${i} ${i + 1}`, (map.get(`${i} ${i + 1}`) || 0) + 1);
    }
  }

  console.log(map);

  map.forEach(v => {
    if (v > 1) answer++;
  });

  return answer;
}

// console.log(solution([[0, 1], [2, 5], [3, 9]]));
// console.log(solution([[-1, 1], [1, 3], [3, 9]]));
console.log(solution([[0, 5], [3, 9], [1, 10]]));