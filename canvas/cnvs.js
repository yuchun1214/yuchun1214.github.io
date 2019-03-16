
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

function loadImg(path,imgx,imgy){
    var img = new Image();
    img.src = path;
    img.onload = function(){
        img.width = 100;
        img.height = 100;
        context.drawImage(img,imgx, imgy);
    }
}

// loadImg('./src/tree3.png',0,150);
// loadImg('./src/leaf/leaf1.png',10,50);

function curveFunction(x){
    return [x+5, 15 * Math.pow(x + 5,0.5)];
}




function Leaf(path, startX, startY){
    
    this.x = startX;
    this.y = startY;
    this.imgs = []
    for(var i = 2; i <= 8; i++){
        var img = new Image();
        img.src = './src/leaf/leaf' + i + '.png'
        this.imgs.push(img);
    }
    // this.img.src = path;
    // this.img.onload = function(){
    //     context.drawImage(this, startX, startY);
    // }
    // console.log(this.imgs);
    this.index = 0;
    this.move = function(){
        var xy = curveFunction(this.x - startX);
        this.x = xy[0] + startX;
        this.y = xy[1] + startY;
        // console.log('(x,y)'+ this.x + ' , ' + this.y);
        this.index = (this.index + 1) < 7 ? (this.index + 1) : 0;
        console.log(this.index);
        context.drawImage(this.imgs[this.index],this.x, this.y);
        // context.clearRect(thi.x,this.y,5,5);
    }

}

var leaf = new Leaf('./src/leaf/leaf1.png',30,300);

function animation(){
    requestAnimationFrame(animation);
    
    // loadImg('./src/tree3.png',0,150);
    leaf.move();
}

function grass(){
    context.fillStyle = '#7AE37A';
    context.fillRect(0,0.5 * canvas.height, canvas.width, 0.5 * canvas.height);
    var img = new Image();
    img.src = './src/cat.png';
    // context.createPattern(img,false);
    // context.drawImage(img,300,300);
    img.onload = function () {
        context.drawImage(img,canvas.width - img.width, canvas.height - img.height);
    }

    var gras = new Image();
    gras.src = './src/grass.png';
    gras.onload = function(){
        
    }
}

grass();

// animation();

// console.log(curveFunction(1,10))