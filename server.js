var express = require("express"),
    bodyParser = require("body-parser");
    http = require("http"),
    functions = require("./functions.js"),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

// set up a static file directory to use for default routing
app.use(express.static(__dirname + "/public"));

var convertStrToInt = function (arr) {
    var i=0;
    for (; i<arr.length; i++) {
        arr[i] = parseInt(arr[i],10);
    }
    return arr;
};

app.get('/', function (req, res) {
    res.sendfile("index.html");
});

//post request for average function
app.post("/average", function(req, res) {
    var array = convertStrToInt(req.body.array),
        result;

    result = functions.average(array);

    res.send(result.toString());
});

//post request for largest number function
app.post("/arrayLargestNum", function(req, res) {
    var array = convertStrToInt(req.body.array),
        result;

    result = functions.largest(array);
    
    res.send(result.toString());
});

//post request for checking function that check the array contain one even number 
app.post("/arrayContainOneEven", function(req, res) {
    var array = convertStrToInt(req.body.array),
        result;

    result = functions.atLeastOneEven(array);
    
    res.send(result.toString());
});

//post request for checking function that check the array contain all even number
app.post("/arrayContainAllEven", function(req, res) {
    var array = convertStrToInt(req.body.array),
        result;

    result = functions.allEven(array);
    
    res.send(result.toString());
});

//post request for checking function that check the array contain one element
app.post("/arrayContainAString", function(req, res) {
    var array = req.body.array,
        element = req.body.element,
        result;

    result = functions.arrayContainOneElement(array, element);
    
    res.send(result.toString());
});

//post request for checking function that check the array contain n elements
app.post("/arrayContainNTimes", function(req, res) {
    var array = req.body.array,
        element = req.body.element,
        amount = req.body.amount,
        result;

    result = functions.arrayContainNElement(array,element,amount);
    
    res.send(result.toString());
});

//listen on port 3000
http.createServer(app).listen(3000);

console.log("Server listening on port 3000");