/**
 * Created by rishabhshukla on 28/10/17.
 */
const restify = require("restify");
const botbuilder = require("botbuilder");

let server = restify.createServer();

server.listen(3456, () => {
    console.log('listening on port 3456');
});

let connector = new botbuilder.ChatConnector();
let bot = new botbuilder.UniversalBot(connector);

server.post("/", connector.listen());

bot.dialog("/", (session) => {
    let message = session.message.text;
    if(message.toLowerCase().indexOf('mait') > -1){
        if(message.toLowerCase().indexOf("fees") > -1){
            session.send("The fees is INR 1,10,000/- only");
        }else if(message.toLowerCase().indexOf("website") > -1){
            session.send("https://mait.ac.in");
        }
    }else{
        session.send('I dont understand what you are saying.');
    }
});