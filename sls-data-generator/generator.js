/**
 * Route: POST /note
 */

const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-1' });

const moment = require('moment');
const faker = require('faker');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE;

setInterval( async () => {

    try {
       
        let data = await dynamodb.put({
            TableName: "sls-notes-backend-prod",
            Item: {
                user_id: faker.random.uuid(),
                timestamp: moment().unix(),
                cat: faker.random.word(),
                title: faker.company.catchPhrase(),
                content: faker.hacker.phrase(),
                note_id: faker.random.uuid(),
                user_name: faker.internet.userName(),
                expires: moment().add(90, 'days').unix()
                }
        }).promise();

        console.log("Data:", data);
        console.log();
    } catch(err) {
        throw err;
    }
}, 2000);
