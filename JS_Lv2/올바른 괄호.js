function solution(s) {
  let opened = 0;
  const length = s.length;

  for (let i = 0; i < length; i++) {
    if (s[i] === '(') opened++;
    else opened--;

    if (opened < 0) return false;

    if (opened > length - i) return false;
  }

  return opened === 0 ? true : false;
}

console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));