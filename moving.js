// const images =  [`numbers/image009.gif`,"numbers/image010.gif", "numbers/image011.gif",
// "numbers/image012.gif", "numbers/image013.gif", "numbers/image014.gif", "numbers/image015.gif",
// "numbers/image016.gif", "numbers/image017.gif", "numbers/image018.gif", "numbers/image019.gif",
// "numbers/image020.gif","numbers/image021.gif", "numbers/image022.gif", "numbers/image023.gif",
// };
let row = 4; let col = 4;

function isSolved(board){
  for (let i = 0; i < board.length - 1; i++) {
    if (board[i] !== images[i].index) {
      return false;
    }
  }
  return true;
}

function clicked(board){
  move(i,j,board);
}
function swap(i, j, board) {
  let temp = board[i];
  board[i] = board[j];
  board[j] = temp;
}
function move(i, j, board) {
  let blank = findBlank();
  let blank_col = blank % col;
  let blank_row = floor(blank / row);

  // Double check valid move
  if (isNeighbor(i, j, blank_col, blank_row)) {
    swap(blank, i + j * col, board);
  }
  if(isSolved){
    alert("You Won!");
    break;
  }
}
function findBlank(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] == -1) return i;
  }
}
function isNeighbor(x,y,x_final,y_final){
  if (x !== x_final && y !== y_final) {
    return false;
  }

  if (abs(x - x_final) == 1 || abs(y - y_final) == 1) {
    return true;
  }
  return false;
}
