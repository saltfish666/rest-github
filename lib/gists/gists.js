const fetch = require('node-fetch')
let token = require('../token')

fetch('https://api.github.com/gists',{
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

/*
[
{ url: 'https://api.github.com/gists/5e774f3ef84cf6f2d29297250e96c2c0',
    forks_url: 'https://api.github.com/gists/5e774f3ef84cf6f2d29297250e96c2c0/forks',
    commits_url: 'https://api.github.com/gists/5e774f3ef84cf6f2d29297250e96c2c0/commits',
    id: '5e774f3ef84cf6f2d29297250e96c2c0',
    node_id: 'MDQ6R2lzdDVlNzc0ZjNlZjg0Y2Y2ZjJkMjkyOTcyNTBlOTZjMmMw',
    git_pull_url: 'https://gist.github.com/5e774f3ef84cf6f2d29297250e96c2c0.git',
    git_push_url: 'https://gist.github.com/5e774f3ef84cf6f2d29297250e96c2c0.git',
    html_url: 'https://gist.github.com/5e774f3ef84cf6f2d29297250e96c2c0',
    files: { 'deepCopy.js': [Object] },
    public: true,
    created_at: '2018-05-22T05:05:05Z',
    updated_at: '2018-05-22T06:04:25Z',
    description: 'js中如何实现深复制？',
    comments: 0,
    user: null,
    comments_url: 'https://api.github.com/gists/5e774f3ef84cf6f2d29297250e96c2c0/comments',
    owner: 
     { login: 'saltfish666',
       id: 37469825,
       node_id: 'MDQ6VXNlcjM3NDY5ODI1',
       avatar_url: 'https://avatars0.githubusercontent.com/u/37469825?v=4',
       gravatar_id: '',
       url: 'https://api.github.com/users/saltfish666',
       html_url: 'https://github.com/saltfish666',
       followers_url: 'https://api.github.com/users/saltfish666/followers',
       following_url: 'https://api.github.com/users/saltfish666/following{/other_user}',
       gists_url: 'https://api.github.com/users/saltfish666/gists{/gist_id}',
       starred_url: 'https://api.github.com/users/saltfish666/starred{/owner}{/repo}',
       subscriptions_url: 'https://api.github.com/users/saltfish666/subscriptions',
       organizations_url: 'https://api.github.com/users/saltfish666/orgs',
       repos_url: 'https://api.github.com/users/saltfish666/repos',
       events_url: 'https://api.github.com/users/saltfish666/events{/privacy}',
       received_events_url: 'https://api.github.com/users/saltfish666/received_events',
       type: 'User',
       site_admin: false },
    truncated: false } ]
*/