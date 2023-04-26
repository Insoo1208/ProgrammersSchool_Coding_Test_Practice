function solution(quiz) {
  return quiz.map(v => {
    const data = v.split(' ');
    if (data[1] === '-') data[2] = -data[2];
    return +data[0] + (+data[2]) === +data[4] ? 'O' : 'X';
  });
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
console.log(solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]));