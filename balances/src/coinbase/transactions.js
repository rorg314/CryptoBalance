const config = require('./config.js')
const coinbase = require('coinbase')

var crypto = require('crypto');

var request = require('request');


const apiKey = COINBASE_API_KEY

const client = coinbase.Client(apiKey)

function GetTransactions(){
    //get unix time in seconds
    var timestamp = Math.floor(Date.now() / 1000);

    // set the parameter for the request message
    var req = {
        method: 'GET',
        path: '/v2/exchange-rates?currency=USD',
        body: ''
    };

    var message = timestamp + req.method + req.path + req.body;
    console.log(message);

    //create a hexedecimal encoded SHA256 signature of the message
    var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");

    //create the request options object
    var options = {
        baseUrl: 'https://api.coinbase.com/',
        url: req.path,
        method: req.method,
        headers: {
            'CB-ACCESS-SIGN': signature,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-KEY': apiKey,
            'CB-VERSION': '2015-07-22'
        }
    };

    request(options,function(err, response){
        if (err) console.log(err);
        console.log(response.body);
    });

}

export default GetTransactions;