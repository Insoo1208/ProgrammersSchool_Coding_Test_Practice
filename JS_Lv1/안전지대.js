function solution(board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < 3; k++) set.add(`${i - 1 > 0 ? i - 1 : 0} ${j - 1 + k > 0 ? (j - 1 + k < board[i].length - 1 ? j - 1 + k : board[i].length - 1) : 0}`);
        for (let k = 0; k < 3; k++) set.add(`${i} ${j - 1 + k > 0 ? (j - 1 + k < board[i].length - 1 ? j - 1 + k : board[i].length - 1) : 0}`);
        for (let k = 0; k < 3; k++) set.add(`${i+1<board.length-1 ? i+1 : board.length-1} ${j-1+k>0?(j-1+k<board[i].length-1 ? j-1+k : board[i].length-1): 0}`);
      }
    }
  }

  return board.flat().length - set.size;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));