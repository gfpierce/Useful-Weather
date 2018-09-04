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
    var zipURL, xmlHttp, data, lat, long;
    zipURL = 'https://us-zipcode.api.smartystreets.com/lookup?auth-id=160203563654804&zipcode=23221';
    xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var content = this.responseText;
            if (content != '' && (content)) {
                callback
            }
        }
    };
    xmlHttp.open("GET", zipURL, true);
    xmlHttp.send();

    function process(resp) {
        data = JSON.parse(resp);
    }

    lat = data[0].zipcodes[0].latitude;
    long = data[0].zipcodes[0].longitude;
    
    /*var getFromAPI = function(callback) {
        $.ajax({
            url: zipURL,
            success: function(response) {
                callback();
            }
        });
    };

    data = getFromAPI(callback);
    console.log(data);
    var callb = function() {
        lat = data[0].zipcodes[0].latitude;
        long = data[0].zipcodes[0].longitude;
    }
    
    /*var pullLatLong = function() {
        lat = data[0].zipcodes[0].latitude;
        long = data[0].zipcodes[0].longitude;
    };
    pullLatLong();*/

    console.log("Lat: " + lat + " Long: " + long);
}

getLatLong();

