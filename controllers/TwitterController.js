var fetch = require('request');
var Twitter = require('twitter');


const URL = 'http://localhost:3000/corstest';


exports.twitter = (req, res, next) => {
    function errorCallback(error) {
        res.send({
            status: 'error',
            error
        });

    }


    function successCallback(response) {
        res.send({
            status: 'success',
            response
        });
    }

    fetch(URL, (err, response, body) => {
        if(err) {
            res.send({
                status: 'error',
                err
            });
        }

        res.send({
            status: 'success',
            response
        });
    });

};
