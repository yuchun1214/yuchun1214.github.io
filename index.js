// create header

var setUp = function (){
    // need to load the langPkg

}

var Header = function (langPkg) {
    this.logo = 'DebuGamO';
    this.attr = ["aboutUs", "news", "Game" , "contactUs"];
    
    this.rander = function () {

    }
}

var midSizeInit = function(e){
    var bodySize = document.querySelector('body').getBoundingClientRect().width;
    // console.log(bodySize.width);
    var jumpbotron = document.getElementById('welcome');
    var jumbotronSize = jumpbotron.getBoundingClientRect().width;

    var remainpx = (bodySize - jumbotronSize);
    var welcome = document.getElementById('welcome');
    welcome.style.left = remainpx / 2 + 'px';
    // console.log(bodySize);
    if(bodySize > 1000){
        welcome.style.top = '25%';
    }else{
        document.getElementById('mid').style.height = 500 + 'px';
        welcome.style.top = '';
    }
    
    // console.log(jumbotronSize);
}

var midImageEffect = function(e){
    var midimage = document.getElementById('midimage');
    midimage.style.filter = 'blur(3px)';
    setTimeout(1500,function(){
        var welcome = document.getElementById('welcome');
        // $('#welcome').toggle(true);
        welcome.style.display = '';
    })
    
}

window.addEventListener('resize',function(e){
    midSizeInit(e);
})

var init = function (e){
    midSizeInit(e);
    midImageEffect(e);
    // contentSizeInit(e);
}

// modalComponent object claim
var modalComponent = function(type){
    this.component = document.getElementById(type + '-nav-link');
    this.form = document.getElementById(type+'form');

}

var contentSizeInit = function(e){
    var bodySize = document.querySelector('body').getBoundingClientRect().width;
    if(bodySize < 500){
        document.getElementById('about').style.padding = 50 + 'px';
        document.getElementById('content-left').style.borderRight = '0px';

    }else{
        document.getElementById('about').style.padding = 100 + 'px';
        document.getElementById('content-left').style.borderRight = '1px';
    }
}

var modal = function(e){

}

window.addEventListener('load',init);

console.log('nav show');
console.log(document.getElementById('navbarNavDropdown').className);
;