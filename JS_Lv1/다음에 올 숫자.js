// function solution(common) {
//   let diff = 0;
//   let ratio = 0;

//   for (let i = 1; i < common.length; i++) {
//     diff = common[i] - common[i-1];
//     ratio = common[i] / common[i-1];
//     if (!Number.isInteger(ratio)) return common.at(-1) + diff;
//   };
//   return common.at(-1) * ratio;
// };

const solution = c => c[1] - c[0] === c[2] - c[1] ? c.at(-1) + c[1] - c[0] : c.at(-1) * (c[1] / c[0]);

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));