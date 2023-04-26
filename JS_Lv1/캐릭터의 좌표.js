class Game {
  constructor([max_row, max_col]) {
    this.place = [0,0];
    this.max_row = (max_row - 1) / 2;
    this.max_col = (max_col - 1) / 2;
  }

  up() {
    if (this.place[1] <= this.max_col) this.place[1]++;
  }

  down() {
    if (this.place[1] >= -this.max_col) this.place[1]--;
  }

  left() {
    if (this.place[1] >= -this.max_row) this.place[0]--;
  }

  right() {
    if (this.place[1] <= this.max_row) this.place[0]++;
  }
}

function solution(keyinput, board) {
  var answer = [0, 0];
  const max_row = (board[0] - 1) / 2;
  const max_col = (board[1] - 1) / 2;

  keyinput.forEach(el => {
    switch (el) {
      case "left":
        if (answer[0] > -max_row) answer[0]--;
        break;

      case "right":
        if (answer[0] < max_row) answer[0]++;

        break;

      case "up":
        if (answer[1] < max_col) answer[1]++;
        break;

      case "down":
        if (answer[1] > -max_col) answer[1]--;
        break;
    
      default:
        break;
    }
  });
  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));