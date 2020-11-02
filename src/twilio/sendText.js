// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure



    const accountSid = 'ACf888666f08c9a7157ab6213446211208';
    const authToken = 'b5a3bba7fb1decc6b139ceb72c9ddd4d';
    const client = require('twilio')(accountSid, authToken);
    
    //Enter all the phone numbers of recipients here
    let recipients = [
        '+16468729355',
        // '+17188014591'
    ]
    
    //This will create a separate Rest API request for each number
    for(let i = 0; i < recipients.length; i++){
        client.messages
            .create({
                // Edit message that will be sent 
                body: 'This is a test from your friendly neighboorhod Spider Man',
                // This is the number that Twilio will send the message from
                from: '+15512272240',
                // This will be the reciever of the message
                to: recipients[i]
            })
            .then(message => console.log(message.sid));
    }


    
    //  Run this command in order to listen to text messages
    // twilio phone-numbers:update "+15512272240" --sms-url="http://localhost:1337/sms"
// }

