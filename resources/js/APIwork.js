/*function zip() {
    var zipCode = getZip();
    getLatLong(zipCode);
}

//Retrieves zip code and converts to number
function getZip() {
    var zipCode = document.getElementById("location").value;
    console.log(zipCode);
    //zipCode = Number(zipCode);
    return zipCode;
}*/

//Hits Zip Code API to retrieve latitude and longitude
function getLatLong() {
    var zipURL, xmlHttp, data, lat, long;
    zipURL = 'https://us-zipcode.api.smartystreets.com/lookup?auth-id=160203563654804&zipcode=23221';
    xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function(callback) {
        if (this.readyState === 4 && this.status === 200) {
            callback(this.responseText);
        }
    }(process);
    xmlHttp.open("GET", zipURL, true);
    xmlHttp.send();



    function process(result) {
        data = JSON.parse(result);
        console.log(data);
        lat = data[0].zipcodes[0].latitude;
        long = data[0].zipcodes[0].longitude;
    }

    console.log("Lat: " + lat + " Long: " + long);
}

getLatLong();

