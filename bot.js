const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
// I am drinking water.

client.on('ready', () => {
    client.user.setUsername('GuinMint');
    console.log("What's good?");
    client.user.setGame('m!say')
});

client.on('message', async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if(command === "ping") {
    const m = await message.channel.send("Yes sir. :man_in_tuxedo:");
    m.edit(`Pong! :ping_pong: Latency is ${m.createdTimestamp - message.createdTimestamp} milliseconds. API Latency is ${Math.round(client.ping)} milliseconds. :stopwatch:`);
    }
     if(command === "say") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{}); 
     message.channel.send(sayMessage);
     }
     });
     
     client.login(process.argv[2])
