function solution(park, routes) {
  let answer = [];
  const dict = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  // Find Start
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === 'S') answer = [i, j];
    }
  }

  // Route
  for (const route of routes) {
    let tmp = [...answer];
    let go = true;
    for (let i = 0; i < route[2]; i++) {
      tmp[0] += dict[route[0]][0];
      tmp[1] += dict[route[0]][1];

      if (
        (tmp[0] > park.length - 1) ||
        (tmp[0] < 0) ||
        (tmp[1] > park[0].length - 1) ||
        (tmp[1] < 0)
        ) { go = false; break; }
      if (park[tmp[0]][tmp[1]] === 'X') { go = false; break; }
      }
    if (go) answer = [...tmp];
  }
  return answer;
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));