var dateSetup = function() {
    var d = new Date();
    var month = d.getUTCMonth() + 1;
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();
    var newDate = d.toLocaleDateString();
    
    document.getElementById("date").innerHTML = newDate;
}();

var tempSetup = function() {
    var temp = 75;
    document.getElementById("temp").innerHTML = temp;
}();

var zipSetup = function() {
    var zip = 23221;
    document.getElementById("zip").innerHTML = zip;
}();