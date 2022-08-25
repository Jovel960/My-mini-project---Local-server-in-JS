const axios = require('axios');
const funcs = require('./GetRequest');

describe('this is unit testing for my first local server', () => {
test('request should return something', async () =>{
  axios
  .get('http://localhost:80/').then(res => {expect(true).toBe(true)}).catch((error)=> {expect(true).toBe(false)});}

  )
  test('request should return something from 2nd server', async ()=>{
    axios
    .get('http://localhost:80/Second_host').then(res =>{expect(true).toBe(true)}).catch((error)=>{expect(false).toBe(false)});
    
})
test('testing the 2nd server content', async ()=>{
    axios
    .get('http://localhost:80/Second_host').then(res=>{ 
        let result = res.data;
        expect(result).toBeDefined();
    }).catch(error=>{expect(false).toBe(true);})
})
test('testing my first local host', ()=>{
    funcs.makeGetRequest1().then(res =>{
        let result = res.data;
        expect(result).toMatch('Israel Daylight Time');
    }).catch(error => {expect(true).toBe(false)});
})
test('testing the 2nd server content', ()=>{
    funcs.makeGetRequest2().then(res=>{ 
      let result = res.data;
      expect(result).toMatch('This is my second local server');
  }).catch(error=>{expect(true).toBe(false)});
})

})