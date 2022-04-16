const images =  [`numbers/image009.gif`,"numbers/image010.gif", "numbers/image011.gif",
"numbers/image012.gif", "numbers/image013.gif", "numbers/image014.gif", "numbers/image015.gif",
"numbers/image016.gif", "numbers/image017.gif", "numbers/image018.gif", "numbers/image019.gif",
"numbers/image020.gif","numbers/image021.gif", "numbers/image022.gif", "numbers/image023.gif",
];
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
function fill_grid_bgrd(arr){
    for (let x = 1; x<=arr.length; x++){
        document.getElementById(`${x}`).style.backgroundImage = `url(${arr[x-1]})`;
        document.getElementById(`${x}`).style.backgroundSize = "100px 100x"
    }
}
window.onload = ()=>{
    const numbers = random_shuffle(images);
    console.log("this part executed");
    document.getElementById("1").style.backgroundImage = `url(${images[0]})`
    //document.body.style.backgroundImage = `url(${numbers})`
    console.log(numbers)
    fill_grid_bgrd(numbers);
}