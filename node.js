const Discord = require('discord.js')// Getting discord to work.
const client = new Discord.Client();
let send = require('quick.hook');//you can use this, if you want to

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});//log when the bot is online

const Cleverbot = require("cleverbot-node");//add the package
const clbot = new Cleverbot;
clbot.configure({botapi: "your api"});//you can buy it                 

client.on("message", (message) => {
  if (message.content.includes("Kim")) {
      if(message.author.bot) return;
          console.log(`--------------------------------------------------------------------------------------------------------`)
            console.log(message.author.tag + " : " + message.cleanContent);//log the user
    clbot.write(message.content, (response) => {
message.channel.send(`**[Kim]** ${response.output}`).catch(console.error);//log the error and send the message
              console.log("messgae From Kim: " + response.output);//log the bot message
      console.log("From: " + message.guild.name)//log the server name
      console.log(`--------------------------------------------------------------------------------------------------------`)
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    }
  });

client.login('token');//the token of your bot
