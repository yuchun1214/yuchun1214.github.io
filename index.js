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
    var jumbotronSize = document.getElementById('welcome').getBoundingClientRect().width;

    var remainpx = (bodySize - jumbotronSize);
    var welcome = document.getElementById('welcome');
    welcome.style.left = remainpx / 2 + 'px';
    console.log(jumbotronSize);
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
}

var modalComponent = function(type){
    this.component = document.getElementById(type + '-nav-link');
    this.form = document.getElementById(type+'form');
    

}

var modal = function(e){

}

window.addEventListener('load',init);