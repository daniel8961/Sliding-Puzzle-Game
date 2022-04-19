const numbers = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15,""]
let outputs = []
window.onload = () =>{
  const temp_arr = random_shuffle(numbers)
  for (let i = 1; i<=16; i++){
    if(temp_arr[i-1] ==""){
    }
    document.getElementById(`${i}`).innerHTML = temp_arr[i-1];
  }
  movable(temp_arr)
}
let row = 4; let col = 4;

function isSolved(board){
  for (let i = 0; i < board.length - 1; i++) {
    if (board[i] != numbers[i]) {
      return false;
    }
  }
  return true;
}

function random_shuffle(arr){
  let curr = 0;
  let randomIndex;
  while(curr < arr.length){
      randomIndex =Math.floor(Math.random()*curr);
      [arr[randomIndex], arr[curr]] = [arr[curr], arr[randomIndex]];
      curr +=1
  }
  return arr;
}
function dragMouseDown(target, idx){
  outputs = []
  const content = document.getElementById(target).innerHTML;
  document.getElementById(target).innerHTML = document.getElementById(idx).innerHTML;
  document.getElementById(idx).innerHTML = content;
  for (let i = 0; i<16; i++){
    const elem = document.getElementById(`${i+1}`).innerHTML;
    const element = document.getElementById(`${i+1}`) 
    outputs.push(elem)
    element.replaceWith(element.cloneNode(true))
  }
  if(isSolved(outputs)){
    alert("You've completed the puzzle! Congrats!")
  }
  movable(outputs)
  


}

function movable(arr){
  outputs = [];
   const index = arr.indexOf("")
   document.getElementById(`${index+1}`).style.backgroundColor = 'white'
   var positions = [];
   if (index<12){
     positions.push(index+4);
   }
   if (index>3){
     positions.push(index-4)
   }
   if (index !==3 && index!==7 && index!==11 && index !==15){
     positions.push(index+1)
   }
   if (index !==0 && index!==4 && index!==8 && index !==12){
    positions.push(index-1)
  }
  for(let i = 0; i<positions.length; i++){
    const item = positions[i]
    document.getElementById(`${item+1}`).onclick = () =>{
      dragMouseDown((index+1),`${item+1}`)
    }
    document.getElementById(`${item+1}`).onmouseover = ()=>{
      document.getElementById(`${item+1}`).style.backgroundColor = 'green';
    }
    document.getElementById(`${item+1}`).onmouseout = ()=>{
      document.getElementById(`${item+1}`).style.backgroundColor ="white"
    }
  }
}
function reshuffle(){
    const temp_arr = random_shuffle(numbers)
    for (let i = 1; i<=16; i++){
      document.getElementById(`${i}`).innerHTML = temp_arr[i-1];
      const elem = document.getElementById(`${i}`);
      elem.replaceWith(elem.cloneNode(true))
    }
    movable(temp_arr)
  
}