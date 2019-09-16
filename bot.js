const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("623256863458328604")
setInterval(function() {
channel.send(`@@@@@@@@@`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
