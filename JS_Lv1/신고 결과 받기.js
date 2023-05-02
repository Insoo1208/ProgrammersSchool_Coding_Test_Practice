function solution(id_list, reports, k) {
  const answer = Array(id_list.length).fill(0);
  const myMap = new Map();

  for (const report of reports) {
    const [a, b] = report.split(' ');
    myMap.set(b, [...new Set([...myMap.get(b) || [], a])]);
  }

  myMap.forEach((value, key) => {
    if (value.length >= k) {
      for (const el of value) {
        answer[id_list.indexOf(el)]++;
      }
    }
  });

  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));