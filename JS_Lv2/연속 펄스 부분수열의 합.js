function solution(s) {
  var answer = 0;
  const max = new Map();
  for (let i = 1; i < s.length - 1; i++) {
    if(s[i] * s[i+1] < 0 && s[i-1] * s[i+1] > 0) {
      
    }
  }
  return answer;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));