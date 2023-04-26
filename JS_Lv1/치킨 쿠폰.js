function solution(chicken) {
  var answer = 0;
  let coupon = chicken;
  
  while (coupon >= 10) {
    answer += ~~(coupon / 10);
    coupon = ~~(coupon / 10) + coupon % 10;
  }
  return answer;
}

console.log(solution(100));
console.log(solution(1081));