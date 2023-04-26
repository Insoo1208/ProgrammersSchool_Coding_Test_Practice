const solution = babbling => babbling.map(data => data.replace(/aya|ye|woo|ma/g, '')).filter(d => d === '').length;

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
