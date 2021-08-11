let XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;

module.exports = function fetchData(url_api){
    return new Promise = ((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.readyState === 4)
                    ? resolve(JSON.parse(resolve.responseText))
                    : reject(new Error(`Error: ${reject} ${url_api}`))
            }
            xhttp.send();
        });
    });
}

