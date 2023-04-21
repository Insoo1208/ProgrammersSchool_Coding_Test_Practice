function solution(s) {
  let upper = true;
  const sArray = s.toLowerCase().split('');
  return sArray.map(str => {
    if (str === ' ') { upper = true; return str; }
    else if (upper) { upper = false; return str.toUpperCase(); }
    else return str;
  }).join('');
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));