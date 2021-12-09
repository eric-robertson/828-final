let AWS = require('aws-sdk')
var docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

module.exports.handler = async (event) => {
    let body = JSON.parse(event.body)
    
    console.log(body)

    let query = {
        TableName : "nluAnswers",
        Item : body
    }

    return await new Promise((y,n) => {
        docClient.put( query, (err,data) => {
            console.log(query, data, err)
            y ({  
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                statusCode: 200,
                body: "Good"
            })
        })
    })
    
};


module.exports.handler({ body : JSON.stringify({uploaded_time : '123123123'})})