const querystring = require('querystring')
const fetch = require('node-fetch')
let token = require('../token')

let qs = querystring.stringify({
	sort: 'updated'
})
fetch('https://api.github.com/users/tj/repos?' + qs,{
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

setTimeout(()=>{},22222222)
