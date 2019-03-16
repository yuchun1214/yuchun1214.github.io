
function init(){
    var a = document.querySelector('li a');
    console.log(a.style.height);
}

var cs = [
    {
        zIndex: -1,
        bottom: '278px',
        right: '90px',
        opacity: 0.6,
    },
    {
        zIndex: -2,
        bottom: '245px',
        right: '75px',
        opacity: 0.3
    },
    {
        zIndex: -4,
        bottom: '260px',
        right: '90px',
        opacity: 1
    }
]

var reset = {
    zIndex: 1,
    bottom: '260px',
    right: '90px',
    opacity: 1
}


function Reset(el){
    for(var a in reset){
        el.style[a] = reset[a];
    }
}

function setCSS(el,num){
    for(var a in cs[num]){
        el.style[a] = cs[num][a];
    }
}

var lastadNUM = 0;
var adNUM = 1;
function animation(){
    
    setTimeout(function(){
        var ad = document.getElementById('ad' + adNUM % 4);
        var lastad = document.getElementById('ad'+lastadNUM % 4);
        setCSS(lastad,adNUM%3);
        Reset(ad);
        adNUM++;
        lastadNUM++;
        requestAnimationFrame(animation);
    },2000);
}

animation();

function webBankToggle() {
    $('#dropdownContent').toggle(200);
}