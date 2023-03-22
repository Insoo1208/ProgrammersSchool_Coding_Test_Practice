function solution(participant, completion) {
  let hash = {};
  for (const p of participant) {
    hash[p] = hash[p] ? hash[p] + 1 : 1;
  };

  for (const p of completion) {
    if (hash[p]) hash[p]--;
  };
  
  for (const p of participant) {
    if (hash[p] > 0) return p
  };
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));