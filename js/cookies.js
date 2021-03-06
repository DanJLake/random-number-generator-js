function createCookie(name, value){
    let today = new Date();
    today = today.getUTCDate();
    let cookie = [
        name, '=', JSON.stringify(value), '; expires=', setExpiryDate(), '; domain=', window.location.host.toString(), '; path=/;'
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

    for (var i=0; i<cookieArray.length; i++){
        console.log('cookieArray ' + i + 'th name = ' + cookieArray[i].split('=')[0] + ' value = ' + cookieArray[i].split('=')[1]);
        console.log('Attempting to match with ' + name);
        if (name == cookieArray[i].split('=')[0]){
            console.log('cookie ' + name + ' : value = ' + cookieArray[i].split('=')[1]);
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

function setExpiryDate(){
    let expiryDate = new Date;
        
        expiryDate.setMonth(expiryDate.getMonth() + 1);

        return expiryDate;
}