function solution(id_pw, db) {
  var answer = 'fail';
  db.some(el => {
    if (id_pw[0] === el[0]) {
      if (id_pw[1] === el[1]) {
        return answer = "login";
      } else {
        answer = "wrong pw";
      }
    }
  });
  return answer;
}

console.log(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]));
console.log(solution(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]));
console.log(solution(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]));