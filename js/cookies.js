function createCookie(name, value){
    let cookie = [
        name, '=', JSON.stringify(value), '; domain=', window.location.host.toString(), '; path=/;'
    ].join('');
    document.cookie = cookie;
}

function deleteCookie(name){
    document.cookie = [
        name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=.', window.location.host.toString(), 'path=/;'
    ].join('');
}

function readCookie(name){
    let allCookies = document.cookie;
    console.log('ALL COOKIES = ' + allCookies);
    cookieArray = allCookies.split(';');
    console.log('cookieArray = ' + cookieArray);
    let foundMatch = false;

    for (var i=0; i<cookieArray.length; i++){
        console.log('cookieArray ' + i + 'th name = ' + cookieArray[i].split('=')[0] + ' value = ' + cookieArray[i].split('=')[1]);
        console.log('Attempting to match with ' + name);
        if (name == cookieArray[i].split('='[0])){
            console.log('cookie' + name + ' : value = ' + value);
            foundMatch = true;
            return cookieArray[i].split('=')[1];
        }
        else{
            console.log('No match or value found for cookie named ' + name);
        }
    }
}

function listCookies(){
    let allCookies = document.cookie;
    cookieArray = allCookies.split(';');

    for (var i=0; i<cookieArray.length; i++){
        name = cookieArray[i].split('=')[0];
        value = cookieArray[i].split('=')[1];
        alert("Cookie " + name + " value = " + value);
    }
}