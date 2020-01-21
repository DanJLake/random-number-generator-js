function changeTheme(themeReq){
    document.getElementsByTagName('body')[0].className = themeReq;

    if (themeReq == 'vintage-wallpaper') {
        document.getElementById('logo').src = './img/rng-white.png';
    }
    else if (themeReq == 'repeated-square-dark') {
        document.getElementById('logo').src = './img/rng-green.png';
    }
    else if (themeReq == 'repeated-square' || themeReq == 'cork-board' || themeReq == 'blue-snow'){
        document.getElementById('logo').src = './img/rng-black.png';
    }
    createCookie('theme', themeReq);
}

function initTheme(){
    
}