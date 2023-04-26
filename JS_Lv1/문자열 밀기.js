function solution(A, B) {
  let arr = [...A]
  for (let i = 0; i < arr.length; i++) {
    if (A === B)
      return i;
    else {
      arr.unshift(arr.pop())
      if (arr.join('') === B)
        return i + 1;
    }
  }
  return -1;
}

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
console.log(solution("abc", "abc"));