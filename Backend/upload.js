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
    for ( let path in dirs ){
        let file = '../Results/' + dirs[path]
        console.log(file)
        let loaded = fs.readFileSync(file,{encoding:  'utf8'})
        if ( !loaded ) continue
        let data = JSON.parse(loaded)
        data.uploaded_id = path + ""
        let query = {
            TableName : "nluSource",
            Item : data
        }

        await new Promise((y,n) => {
            docClient.put( query, (err,data) => {
                if (err) n()
                y ()
            })
        })
    }
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