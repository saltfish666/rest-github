const fetch = require('node-fetch')
let token = require('../token')

fetch('https://api.github.com/applications/grants',{
	headers: {
		Authorization: 'bearer ' + token
	}
})
    .then( res => {
    	console.log(res.ok);
		console.log(res.status);
		console.log(res.statusText);
		console.log(res.headers.raw());
		return res.json()
    })
    .then( json => {
        console.log(json)
    })
/*
documentation_url
  :"https://developer.github.com/v3"
message
  :"This API can only be accessed with username and password Basic Auth"
*/



setTimeout(()=>{},22222222)