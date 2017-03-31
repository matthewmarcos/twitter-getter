var fetch = require('request');
var Twitter = require('twitter');


const URL = 'http://localhost:3000/corstest';
const client = new Twitter({
    consumer_key: 'ZYo3KjfE00026JwA8Wrt0oj2G',
    consumer_secret: 'QaqZl4gczZGrVLVHPMGVkZUCZOUYVaM5VKjZzqnrL13GyW3zEX',
    access_token_key: '2241868928-qLI249NTVeyIthQ1XQRIHCyFjzjWDt6q7O1k4bb',
    access_token_secret: 'zPxG86Tb3izGgsOOvNqIxgGSUNQLAVFApcGG8SHAOTEzd'
});


exports.twitter = (req, res, next) => {
    fetch(URL, (err, response, body) => {
        if(err) {
            res.send({
                status: 'error',
                err
            });
        }

        res.send({
            status: 'success',
            response,
            body
        });
    });

};


