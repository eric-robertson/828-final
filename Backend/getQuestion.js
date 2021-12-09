let AWS = require('aws-sdk')
var docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

module.exports.handler = async (event) => {

    let query = {
        TableName : "nluSource",
        Key : {
            "uploaded_id" : "" +( Math.floor(Math.random()*344)+1)
        }
    }

    console.log(query)

    return await new Promise((y,n) => {
        docClient.get( query, (err,data) => {
            y ({  
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                statusCode: 200,
                body: JSON.stringify({
                    "query": query,
                    "result": JSON.stringify( data, null, 2),
                }),
            })
        })
    })
    
};
