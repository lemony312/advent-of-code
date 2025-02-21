const fetch = require('node-fetch');

async function test(){
    const response = await fetch('https://httpbin.org/anything', {method: 'GET'})

    try {
        const jobIds = process.env.JENKINS_USER_TOKEN;
    } catch (e) {
        console.log(`cant get env: ${e}`)
    }

    if(response.ok) {
        const body = await response.json()
        console.log(`answer: ${body}`);
        if(body.headers) {
            console.log(`headers: ${body.headers.Accept}`);
        } else {
            console.log("expected a different value..")
        }
    }
}

exports.test = test;