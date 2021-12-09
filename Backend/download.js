let AWS = require('aws-sdk')
const fs = require('fs')

var docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

let dirs = fs.readdirSync('../Results');

function sleep(time) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
}

(async () => {
    let query = {
        TableName : "nluAnswers"
    }

    await new Promise((y,n) => {
        docClient.scan( query, (err,data) => {
            console.log(data)
            fs.writeFileSync('../Answers/1.json', JSON.stringify(data.Items), 'utf-8')
        })
    })
})()

/*
module.exports.handler = async (event) => {
    let body = JSON.parse(event.body)
    
    let query = {
        TableName : "nluSource",
        Item : body
    }

    return await new Promise((y,n) => {
        docClient.put( query, (err,data) => {
            console.log(data, err)
            y ({  
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                statusCode: 200,
                body: "good",
            })
        })
    })
    
};
*/