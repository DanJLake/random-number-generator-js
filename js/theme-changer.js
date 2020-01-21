function changeTheme(themeReq){
    document.getElementsByTagName('body')[0].className = themeReq;

    if (themeReq == 'vintage-wallpaper') {
        document.getElementById('logo').src = './img/rng-white.png';
        createCookie('theme', themeReq);
    }
    else if (themeReq == 'repeated-square-dark') {
        document.getElementById('logo').src = './img/rng-green.png';
        createCookie('theme', themeReq);
    }
    else if (themeReq == 'repeated-square' || themeReq == 'cork-board' || themeReq == 'blue-snow'){
        document.getElementById('logo').src = './img/rng-black.png';
        createCookie('theme', themeReq);
    }
    else{
        document.getElementsByTagName('body')[0].className = 'vintage-wallpaper';
        document.getElementById('logo').src = './img/rng-white.png';
        createCookie('theme', themeReq);
    }

    if (themeReq) {
    }
}

function initTheme(){
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*60;

    changeTheme(readCookie('theme'));
}