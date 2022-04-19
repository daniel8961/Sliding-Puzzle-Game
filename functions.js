
var image = new Image();
image.onload = cutImageUp;
image.src = 'spiderman.png';
window.onload = ()=>{
    cutImageUp();
}
function cutImageUp() {
    var imagePieces = [];
    for(var x = 0; x < numColsToCut; ++x) {
        for(var y = 0; y < numRowsToCut; ++y) {
            var canvas = document.createElement('canvas');
            canvas.width = 50;
            canvas.height = 50;
            var context = canvas.getContext('2d');
            context.drawImage(image, x *50, y *50, 50, 50, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }
    console(imagePieces)
}
