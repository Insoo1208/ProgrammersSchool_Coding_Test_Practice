function solution(n) {
  var answer = 1;
  let cnt = 1;

  while (cnt <= n) {
    if (answer % 3 === 0 || answer.toString().includes('3')) {
      answer++;
    }
    else {
      answer++;
      cnt++;
    }
  }
  return answer-1;
}

console.log(solution(15));
console.log(solution(40));