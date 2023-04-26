function solution(skill, skill_trees) {
  let answer = 0;

  for (const skills of skill_trees) {
    const stack = [...skill];
    for (let i = 0; i < skills.length; i++) {
      if (stack.indexOf(skills[i]) > 0) break;
      else if (stack.indexOf(skills[i]) === 0) {
        stack.shift();
      }

      if (i === skills.length - 1) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));