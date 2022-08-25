const axios = require('axios');
const GetRequest = {

  makeGetRequest1: function(){
    return axios
    .get('http://localhost:80/')
  }
,
  makeGetRequest2 : function(){
    return axios
    .get('http://localhost:80/Second_host') 
  }
}

module.exports = GetRequest;





/*/var http = require('http');

var options = {
  host: 'localhost',
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}
http.request(options, callback).end();/*/

