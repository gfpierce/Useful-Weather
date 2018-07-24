var document = new Document();

function zip() {
    var zipCode = getZip();
    getLatLong(zipCode);
}
//Retrieves zip code and converts to number
function getZip() {
    var zipCode = document.getElementById("location").value;
    console.log(zipCode);
    //zipCode = Number(zipCode);
    return zipCode;
}

//Hits Zip Code API to retrieve latitude and longitude
function getLatLong(zipCode) {
    var zipURL = 'https://www.zipcodeapi.com/rest/h1O8fxBDqckHpYoIRmF6Ddj7S1QjCYGhc8Y7Freb3m8NwMuJ8vtisONJf6OB7e1l/info.json/' + zipCode + '/degrees';

    var client = new HttpClient();
    client.get(zipURL, function(response) {
        console.log(response);
    });
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                aCallback(anHttpRequest.responseText);
            }
        }
    
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}
