function solution(array) {
  let hash = new Map();
  array.map(num => hash.set(num, (hash.get(num) || 0) + 1));
  const sortedHash = [...hash].sort((a, b) => b[1] - a[1]);

  if (sortedHash.length === 1) return sortedHash[0][0]
  else if (sortedHash[0][1] === sortedHash[1][1]) return -1
  else return sortedHash[0][0];
};