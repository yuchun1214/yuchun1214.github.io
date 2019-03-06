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

window.addEventListener('resize',function(e){
    midSizeInit(e);
})

var init = function (e){
    midSizeInit(e);
}

window.addEventListener('load',init);