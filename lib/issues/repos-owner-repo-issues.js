const fetch = require('node-fetch')
let token = require('../token')

fetch('https://api.github.com/repos/tj/go/issues',{
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