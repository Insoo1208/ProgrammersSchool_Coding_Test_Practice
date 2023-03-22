const solution = (a, c) => c.map(d => a.slice(d[0] - 1, d[1]).sort((a, b) => a - b)[d[2] - 1]);

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));