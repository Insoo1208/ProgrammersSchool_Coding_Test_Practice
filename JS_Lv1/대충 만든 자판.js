function solution(keymap, targets) {
  var answer = [];
  const myMap = new Map();

  for (const keys of keymap) {
    [...keys].forEach((el, idx) => {
      myMap.set(el, Math.min(myMap.get(el) || 100, idx + 1));
    });
  }

  myMap.forEach((v, k) => console.log(k, v));

  return targets.map(v => [...v].reduce((a, c) => a + myMap.get(c), 0) || -1);
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
console.log(solution(["AA"], ["B"]));
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));