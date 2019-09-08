const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("620296786476531713")
setInterval(function() {
channel.send(`لا تلعب معانا يا سنكي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);