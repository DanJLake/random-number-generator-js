function changeTheme(themeReq){
    themeReq = themeReq.replace(/"/g, '');
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
    else if (themeReq == 'halftone-yellow'){
        document.getElementById('logo').src = './img/rng-red.png';
    }
    else{
        document.getElementsByTagName('body')[0].className = 'vintage-wallpaper';
        document.getElementById('logo').src = './img/rng-white.png';
    }

    if (themeReq) {
        createCookie('theme', themeReq); //TRIM
    }
}

function initTheme(){
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*60;

    let initialTheme = readCookie('theme');

    if (readCookie('theme')) {
        changeTheme(readCookie('theme').replace(/"/g, ''));
    }
    else{
        changeTheme('vintage-wallpaper');
    }
}