/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var express = require('express'),
    http = require('http'),
    functions = require("./functions.js"),
    app = express();

// set up a static file directory to use for default routing
app.use(express.static(__dirname + '/public'));

var convertStrToInt = function (arr) {
    'use strict'
    var newArray = [];
     arr.forEach(function(value) {
        newArray.push(parseInt(value,10));
    });
    return newArray;
};

//post request for average function
app.post('/average', function(req, res) {
    'use strict'
    var jsonObj,
        array,
        result;

    req.on('data', function (data) {
        jsonObj = JSON.parse(data);
        array = convertStrToInt(jsonObj.array);
        result = functions.average(array);
        return res.json({result: result});
    });    
});

//post request for largest number function
app.post('/arrayLargestNum', function(req, res) {
    'use strict'
    var jsonObj,
        array,
        result;

    req.on('data', function (data) {
        jsonObj = JSON.parse(data);
        array = convertStrToInt(jsonObj.array);
        result = functions.largest(array);
        return res.json({result: result});
    }); 
});

//post request for checking function that
// check the array contain one even number 
app.post('/arrayContainOneEven', function(req, res) {
    'use strict'
    var jsonObj,
        array,
        result;

    req.on('data', function (data) {
        jsonObj = JSON.parse(data);
        array = convertStrToInt(jsonObj.array);
        result = functions.atLeastOneEven(array);
        return res.json({result: result});
    });
});

//post request for checking function that
// check the array contain all even number
app.post('/arrayContainAllEven', function(req, res) {
    'use strict'
    var jsonObj,
        array,
        result;

    req.on('data', function (data) {
        jsonObj = JSON.parse(data);
        array = convertStrToInt(jsonObj.array);
        result = functions.allEven(array);
        return res.json({result: result});
    });
});

//post request for checking function that
//  check the array contain one element
app.post('/arrayContainAString', function(req, res) {
    'use strict'
    var jsonObj,
        array,
        element,
        result;

    req.on('data', function (data) {
        jsonObj = JSON.parse(data);
        array = jsonObj.array;
        element = jsonObj.element;
        result = functions.arrayContainOneElement(array,element);
        return res.json({result: result});
    });
});

//post request for checking function that
//  check the array contain n elements
app.post('/arrayContainNTimes', function(req, res) {
    'use strict'
    var jsonObj,
        array,
        element,
        amount,
        result;

    req.on('data', function (data) {
        jsonObj = JSON.parse(data);
        array = jsonObj.array;
        element = jsonObj.element;
        amount = jsonObj.amount;
        result = functions.arrayContainNElement(array,element,amount);
        return res.json({result: result});
    });
});

//listen on port 3000
http.createServer(app).listen(3000);

console.log('Server listening on port 3000');