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


