function solution(numbers) {

  var answer = numbers
    .map(c => c + '')
    .sort((a, b) => (b + a) - (a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([1, 10, 11, 101, 200]));